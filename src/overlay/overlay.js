let isShown = false
p3xr.ui.overlay = new function () {
    const template = (options = {}) => {
        return `
<div id="p3xr-overlay">
    <div id="p3xr-overlay-info">
        <i class="fas fa-cog fa-spin" style="font-size: 500% !important;"></i>
        ${options.hasOwnProperty('message') ? "<br/><br/>" : ''}
        ${options.hasOwnProperty('message') ? options.message : ''}
    </div>
</div>
        `
    }

    this.show = (options = {}) => {
        this.hide()
        document.body.classList.add('p3xr-overlay-visible')
        document.body.insertAdjacentHTML('beforeend', template(options))
        isShown = true
    }

    this.hide = () => {
        isShown = false
        document.body.classList.remove('p3xr-overlay-visible')
        const el = document.getElementById('p3xr-overlay')
        if (el) el.remove()
    }
}

const interceptEscapeKey = (event) => {
    if (event.key === 'Escape' && isShown === true) {
        event.stopPropagation();
        event.preventDefault();
    }
};
document.addEventListener('keydown', interceptEscapeKey, true);
