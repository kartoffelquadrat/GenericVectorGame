// This file is referenced by the patched svg. TODO: make sure reference is automatically added by patcher!
// Whenever "document shows up here, it actually refers to the SVG, not the HTML page."


function fillWithRandomColour(id) {
    let g = document.getElementById(id);

    // Random colour string generator: https://stackoverflow.com/a/5092872
    let randomColor = "#000000".replace(/0/g, function () {
        return (~~(Math.random() * 16)).toString(16);
    });
    g.childNodes[1].setAttribute("fill", randomColor);
}