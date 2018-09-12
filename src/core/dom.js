// https://www.google.hu/search?q=javascript+vanilla+position&oq=javascript+vanilla+position&aqs=chrome..69i57.3908j0j7&sourceid=chrome&ie=UTF-8
// https://www.kirupa.com/html5/get_element_position_using_javascript.htm

const dom = {}

dom.getPosition = function getPosition(el) {
    let leftPos = 0;
    let topPos = 0;

    const style = el.currentStyle || window.getComputedStyle(el);
    const width = el.offsetWidth // or use style.width
    const marginSide = parseFloat(style.marginLeft) + parseFloat(style.marginRight)
    const paddingSide = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight)
    const borderSide = parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth)

    const height = el.offsetHeight // or use style.width
    const marginHorizontal = parseFloat(style.marginTop) + parseFloat(style.marginBottom)
    const paddingHorizontal = parseFloat(style.paddingTop) + parseFloat(style.paddingBottom)
    const borderHorizontal = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth)

    const result = {
        width: width + marginSide + paddingSide + borderSide,
        height: height + marginHorizontal + paddingHorizontal + borderHorizontal
    }

    while (el) {
        if (el.tagName === "BODY") {
            // deal with browser quirks with body/window/document and page scroll
            const leftScroll = el.scrollLeft || document.documentElement.scrollLeft;
            const topScroll = el.scrollTop || document.documentElement.scrollTop;

            leftPos += (el.offsetLeft - leftScroll + el.clientLeft);
            topPos += (el.offsetTop - topScroll + el.clientTop);
        } else {
            // for all other non-BODY elements
            leftPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
            topPos += (el.offsetTop - el.scrollTop + el.clientTop);
        }

        el = el.offsetParent;
    }

    result.left = leftPos
    result.top = topPos

    return result;
}

/*
// deal with the page getting resized or scrolled
window.addEventListener("scroll", updatePosition, false);
window.addEventListener("resize", updatePosition, false);

function updatePosition() {
    // add your code to update the position when your browser
    // is resized or scrolled
}
*/

p3xr.dom = dom