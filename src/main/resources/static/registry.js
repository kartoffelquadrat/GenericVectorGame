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

    // A first handler
    let rect = getSvgElementById('VID-SQUARE1');
    rect.setAttribute("onclick", "fillWithRandomColour(\"VID-SQUARE1\")");

    // A second handler that includes a backend call
    let diamondName = "VID-CIRCLE"
    let circle = getSvgElementById(diamondName)

    // The remaining handlers
    let rect2 = getSvgElementById('VID-SQUARE2');
    rect2.setAttribute("onclick", "printMessage(\"Yay\")");
    // A first handler
    let diamond = getSvgElementById('VID-DIAMOND');
    diamond.setAttribute("onclick", "printMessage(\"<>\")");

    // on click send rest call server that randomized backend state of animal resource
    circle.setAttribute("onclick", "requestAnimalUpdate()");
}

/**
 * Any asynchronous endpoint to be observed is registered here. I tis important to only start up the observers once
 * the SVG is loaded, since otherwise the retrieved results cannot be visualized.
 */
function registerResourceObservers() {

    console.log("Registering resource observers");
    observeResource("/gvg/animals/animal?hash=", updateDisplayedAnimalName, function () {
        console.error("Long Poll Failed.");
    }, "");

}

// Here we invoke jQuery to only associate the handlers once the SVG is for sure loaded. Also starts the ARL resource
// observers.
function registerHandlersWhenSvgLoaded() {

    console.log("Waiting for DOM tree to be ready...");
    $(document).ready(registerHandlers);
    $(document).ready(registerResourceObservers);
}