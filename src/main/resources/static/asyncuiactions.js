
function updateDisplayedAnimalName(stateBundle) {
    console.log("updating animal name to: " + stateBundle.animal);
    // Todo: actually change the name in the SVG dom tree.
    let gcircle = getSvgElementById('VID-CIRCLE');
    console.log(gcircle);
    console.log("Changing text of "+gcircle+" to "+stateBundle.animal);
    let text = gcircle.children[2]; //use children, not childNodes! https://stackoverflow.com/a/27501373
    let tspan = text.children[0];
    console.log(tspan);
    tspan.textContent=stateBundle.animal;
}