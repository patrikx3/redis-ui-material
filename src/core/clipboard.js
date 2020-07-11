global.p3xr.clipboard = (opts) => {

    var copy = $('<textarea>' + opts.value + '</textarea>');
    $('body').append(copy);
    copy.select();
    var successful = false;
    try {
        successful = document.execCommand('copy');
    } catch (err) {
    }
    copy.remove();
    return successful;
}

