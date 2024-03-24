global.p3xr.clipboard = async (opts) => {
    try {
        await navigator.clipboard.writeText(opts.value);
        return true;
    } catch (err) {
        console.error("Failed to copy:", err);
        return false;
    }
};