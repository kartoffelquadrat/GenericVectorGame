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


function registerHandlers() {

    console.log("DOM tree is ready");
    let rect = getSquareElement();
    rect.setAttribute('fill', '#fff000');

}


function registerHandlersWhenSvgLoaded() {

    console.log("Waiting for DOM tree to be ready...");
    $(document).ready(registerHandlers);
}