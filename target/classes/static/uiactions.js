// This file is referenced by the patched svg. TODO: make sure reference is automatically added by patcher!
// Whenever "document shows up here, it actually refers to the SVG, not the HTML page."


function fillWithRandomColour(id) {
    let g = document.getElementById(id);
    let randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    g.childNodes[1].setAttribute("fill", randomColor);

    // find all child nodes with a fill attribute and change those:
//     for (let childIndex = 0; childIndex = g.childNodes.length; childIndex++) {
//         // if (g.childNodes[childIndex].hasOwnProperty("attributes")) {
//         console.log(childIndex)
//         console.log(g.childNodes[childIndex]);
//         console.log(g.childNodes[childIndex].nodeType);
// // {
// //                 g.childNodes[childIndex].setAttribute("fill", "#" + Math.floor(Math.random() * 16777215).toString(16));
// //             }
// //         }
//     }
}