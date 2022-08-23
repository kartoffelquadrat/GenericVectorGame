
function updateDisplayedAnimalName(stateBundle) {
    console.log("updating animal name to: " + stateBundle.animal);
    // Todo: actually change the name in the SVG dom tree.
    let gcircle = getSvgElementById('VID-CIRCLE');
    let text = gcircle.children[2]; //use children, not childNodes! https://stackoverflow.com/a/27501373
    let tspan = text.children[0];
    tspan.textContent=stateBundle.animal; // Todo: add text-anchor="middle" as attribute to all tspans. Consider doing that in svg transformer.
}