/**
 * Redis server version parsing and feature gating.
 * Shared by Angular and React frontends.
 *
 * Usage:
 *   const rv = parseRedisVersion(state.info()?.server?.redis_version)
 *   if (rv.isAtLeast(8, 2)) { // show VSIM IN filter }
 */

export interface RedisVersion {
    major: number
    minor: number
    patch: number
    /** Check if version is at least major.minor */
    isAtLeast(major: number, minor: number): boolean
    /** Raw version string (e.g. '8.6.2') */
    raw: string
}

const UNKNOWN: RedisVersion = {
    major: 0, minor: 0, patch: 0,
    isAtLeast: () => false,
    raw: '',
}

export function parseRedisVersion(versionStr: string | undefined | null): RedisVersion {
    if (!versionStr) return UNKNOWN
    const parts = versionStr.split('.').map(Number)
    const major = parts[0] || 0
    const minor = parts[1] || 0
    const patch = parts[2] || 0
    return {
        major, minor, patch,
        isAtLeast: (reqMajor, reqMinor) =>
            major > reqMajor || (major === reqMajor && minor >= reqMinor),
        raw: versionStr,
    }
}
