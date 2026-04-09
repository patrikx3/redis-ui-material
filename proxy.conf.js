module.exports = [
    {
        context: ['/api'],
        target: `http://localhost:${process.env.P3XR_API_PORT || 7843}`,
        secure: false,
    }
];
