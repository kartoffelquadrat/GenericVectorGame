function showAlert() {

    alert("yay");
}


function registerHandlers() {

    // https://www.petercollingridge.co.uk/tutorials/svg/interactive/javascript/
    let svg = document.getElementById('board');
    console.log(svg);
    let element = svg.getElementById('VID-SQUARE1');
    console.log(element);

}


function registerHandlersWhenSvgLoaded() {

    // $(document).ready(registerHandlers);


}