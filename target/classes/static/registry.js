function getSvgElementById(id) {

    // https://www.petercollingridge.co.uk/tutorials/svg/interactive/javascript/
    let svg = document.getElementById('board');
    console.log(svg);
    return svg.contentDocument.getElementById(id);
}

function registerHandlers() {

    console.log("DOM tree is ready");

    // Long list of actions associated to individual elements.
    let rect = getSvgElementById('VID-SQUARE1');
    rect.setAttribute("onclick", "fillWithRandomColour(\"VID-SQUARE1\")");
}


function registerHandlersWhenSvgLoaded() {

    console.log("Waiting for DOM tree to be ready...");
    $(document).ready(registerHandlers);
}