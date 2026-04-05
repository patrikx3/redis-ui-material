#!/bin/bash
# Self-contained E2E test runner
# Starts Redis (Docker), builds Angular+React, starts redis-ui-server, runs tests, cleans up.
# Usage: bash tests/run-e2e.sh [--gui]

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
MATERIAL_DIR="$(dirname "$SCRIPT_DIR")"
WORKSPACE_DIR="$(dirname "$MATERIAL_DIR")"
SERVER_DIR="$WORKSPACE_DIR/redis-ui-server"

REDIS_PORT=${P3XR_TEST_REDIS_PORT:-26379}
REDIS_CONTAINER="p3xr-test-redis"
SERVER_PORT=${P3XR_TEST_SERVER_PORT:-27843}
GUI_MODE=""

if [[ "$1" == "--gui" ]]; then
    GUI_MODE="--headed"
    export P3XR_HEADLESS=false
fi

# Kill any existing processes on test port
PID=$(lsof -ti:$SERVER_PORT 2>/dev/null || true)
if [ -n "$PID" ]; then
    echo "Killing existing process on port $SERVER_PORT (PID $PID)"
    kill $PID 2>/dev/null || true
    sleep 1
fi

cleanup() {
    echo ""
    echo "=== Cleanup ==="
    [ -n "$SERVER_PID" ] && kill $SERVER_PID 2>/dev/null && echo "Stopped redis-ui-server (PID $SERVER_PID)"
    docker rm -f $REDIS_CONTAINER 2>/dev/null && echo "Removed Redis container"
    echo "Done."
}
trap cleanup EXIT

echo "=== Starting test Redis on port $REDIS_PORT ==="
docker rm -f $REDIS_CONTAINER 2>/dev/null || true
docker run -d --name $REDIS_CONTAINER -p $REDIS_PORT:6379 redis:latest
echo "Waiting for Redis..."
sleep 2

# Verify Redis
if ! docker exec $REDIS_CONTAINER redis-cli ping | grep -q PONG; then
    echo "ERROR: Redis not responding"
    exit 1
fi
echo "Redis ready on port $REDIS_PORT"

# Seed test data
docker exec $REDIS_CONTAINER redis-cli SET test:string "hello world"
docker exec $REDIS_CONTAINER redis-cli HSET test:hash name Alice age 30
docker exec $REDIS_CONTAINER redis-cli RPUSH test:list item1 item2 item3
docker exec $REDIS_CONTAINER redis-cli SADD test:set red green blue
docker exec $REDIS_CONTAINER redis-cli ZADD test:zset 1 alpha 2 beta 3 gamma
echo "Test data seeded"

# Build Angular + React if needed
echo ""
echo "=== Building Angular + React ==="
cd "$MATERIAL_DIR"
if [ ! -f dist/index.html ]; then
    echo "Building Angular..."
    yarn build
else
    echo "Angular build exists, skipping"
fi
if [ ! -f dist-react/index.html ]; then
    echo "Building React..."
    yarn build-react
else
    echo "React build exists, skipping"
fi

# Create test connections config
TEST_HOME=$(mktemp -d)
cat > "$TEST_HOME/p3xrs.json" <<EOF
{
    "p3xrs": {
        "http": {
            "port": $SERVER_PORT,
            "bind": "0.0.0.0"
        },
        "connections": {
            "home-dir": "$TEST_HOME"
        },
        "static": "$MATERIAL_DIR/dist",
        "staticReact": "$MATERIAL_DIR/dist-react"
    }
}
EOF
cat > "$TEST_HOME/.p3xrs-conns.json" <<EOF
{
    "list": [
        {
            "name": "localhost",
            "host": "127.0.0.1",
            "port": $REDIS_PORT,
            "id": "test-connection-1"
        }
    ]
}
EOF

echo ""
echo "=== Starting redis-ui-server on port $SERVER_PORT ==="
cd "$SERVER_DIR"
NODE_ENV=development P3XRS_PORT=$SERVER_PORT node bin/p3xrs.mjs -c "$TEST_HOME/p3xrs.json" &
SERVER_PID=$!
sleep 3

# Verify server
if ! curl -s http://localhost:$SERVER_PORT/health | grep -q "ok"; then
    echo "ERROR: redis-ui-server not responding"
    exit 1
fi
echo "Server ready on port $SERVER_PORT"

echo ""
echo "=== Running Playwright tests (Angular + React) ==="
cd "$MATERIAL_DIR"
export PLAYWRIGHT_BASE_HOST="http://localhost:$SERVER_PORT"
npx playwright test $GUI_MODE
TEST_EXIT=$?

echo ""
if [ $TEST_EXIT -eq 0 ]; then
    echo "ALL TESTS PASSED"
else
    echo "SOME TESTS FAILED (exit code $TEST_EXIT)"
fi

# Cleanup handled by trap
exit $TEST_EXIT
