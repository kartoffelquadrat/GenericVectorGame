function getSvgElementById(id) {

    // https://www.petercollingridge.co.uk/tutorials/svg/interactive/javascript/
    let svg = document.getElementById('board');
    console.log(svg);
    return svg.contentDocument.getElementById(id);
}

// The trick here is to associate a function as handler, that appears in the "uiactions.js" file. "uiactions.js" is
// embedded in the SVG so all method calls in there can be resolved by the SVGs internal JS interpreter. E.g. the
// "fillWithRandomColour" function can be resolved by the handler associates to rect, since the "fillWithRandomColour"
// function appears in "uiactions.js" and that file was embedded as reference in the svg by the patcher (filename was
// provided as runtime argument for the patcher. See "scripts/svgpatch.sh").
function registerHandlers() {

    console.log("DOM tree is ready");

    // Long list of actions associated to individual elements.
    let rect = getSvgElementById('VID-SQUARE1');
    rect.setAttribute("onclick", "fillWithRandomColour(\"VID-SQUARE1\")");

    // A second handler that includes a backend call
    let diamondName = "VID-CIRCLE"
    let circle = getSvgElementById(diamondName)
    circle.setAttribute("onclick", "fillWithRandomAnimalNameFromBackend(\""+diamondName+"\")");
}

// Here we invoke jQuery to only associate the hondlers one the SVG is for sure loaded.
function registerHandlersWhenSvgLoaded() {

    console.log("Waiting for DOM tree to be ready...");
    $(document).ready(registerHandlers);
}