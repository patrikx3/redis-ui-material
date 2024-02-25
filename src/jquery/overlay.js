let counter = 0
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
        //console.warn('p3xr.ui.overlay show')
        $body.append(template(options))
        isShown = true
    }

    this.hide = () => {
        //console.warn('p3xr.ui.overlay hide')
        isShown = false
        $body.find('#p3xr-overlay').remove()
    }
}

const disableEscapeKey = () => {
    // Use vanilla JS to capture the event in the capturing phase
    document.addEventListener('keydown', interceptEscapeKey, true); // true for capture phase
};

const enableEscapeKey = () => {
    document.removeEventListener('keydown', interceptEscapeKey, true);
};

const interceptEscapeKey = (event) => {
    //console.log('interceptEscapeKey', event, event.key, event.keyCode, event.which, event.code  )
    if (event.key === 'Escape' && isShown === true) {
        event.stopPropagation(); // Prevent further propagation in the capture phase
        event.preventDefault(); // Prevent the default escape action
    }
};
disableEscapeKey();