function showAlert() {

    alert("yay");
}

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
function getRandomColour()
{
    return "#"+Math.floor(Math.random()*16777215).toString(16);
}

function randomizeRectColour() {

    let rect = getSquareElement();
    rect.setAttribute("fill", getRandomColour());
}


function registerHandlers() {

    console.log("DOM tree is ready");
    let rect = getSquareElement();
    rect.setAttribute("onclick", "alert(\"clicked!\")");
}


function registerHandlersWhenSvgLoaded() {

    console.log("Waiting for DOM tree to be ready...");
    $(document).ready(registerHandlers);
}