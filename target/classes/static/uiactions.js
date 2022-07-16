// This file is referenced by the patched svg. TODO: make sure reference is automatically added by patcher!
// Whenever "document shows up here, it actually refers to the SVG, not the HTML page."

function fillWithRandomColour(id) {
    let g = document.getElementById(id);
    // https://css-tricks.com/snippets/javascript/random-hex-color/
    g.childNodes[1].setAttribute("fill", "#" + Math.floor(Math.random() * 16777215).toString(16));
}