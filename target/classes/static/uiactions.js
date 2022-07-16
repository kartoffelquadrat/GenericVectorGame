function getSquareElement() {
    // https://www.petercollingridge.co.uk/tutorials/svg/interactive/javascript/
    let svg = document.getElementById('board');
    console.log(svg);
    let aRectangleWithIdSquare1 = svg.contentDocument.getElementById('VID-SQUARE1');
    console.log(aRectangleWithIdSquare1);
    return aRectangleWithIdSquare1.childNodes[1]; // TODO: use better way to find rect with fill.
}

/**
 * https://css-tricks.com/snippets/javascript/random-hex-color/
 * @return {string}
 */
function setRandomColour()
{
    // This function is called from the SVG so "document" refers to the svg, not the entire page.
    let aRectangleWithIdSquare1 = document.getElementById('VID-SQUARE1');
    console.log(aRectangleWithIdSquare1);
    let rect = aRectangleWithIdSquare1.childNodes[1]; // TODO: find more elegant way to identify element...
    rect.setAttribute("fill", "#"+Math.floor(Math.random()*16777215).toString(16));
}


function registerHandlers() {

    console.log("DOM tree is ready");
    let rect = getSquareElement();
    // The target function is actually embedded in the target svg, so it shoudl not be a nested function
    rect.setAttribute("onclick", "setRandomColour()");
}


function registerHandlersWhenSvgLoaded() {

    console.log("Waiting for DOM tree to be ready...");
    $(document).ready(registerHandlers);
}