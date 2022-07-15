function openLeftNav() {
    document.getElementById("menuNav").style.width = "20%";
}

function closeLeftNav() {
    document.getElementById("menuNav").style.width = "0";
}

function openRightNav() {
    document.getElementById("logNav").style.width = "35%";
}

function closeRightNav() {
    document.getElementById("logNav").style.width = "0";
}

function switchToIsbns() {
    document.getElementById("isbns").style.display = null;
    document.getElementById("stocks").style.display = "none";
}

function switchToStocks() {
    document.getElementById("isbns").style.display = "none";
    document.getElementById("stocks").style.display = null;
}

// todo: modify the css class for all reply boxes to be hidden
function resetAllReplies() {
    const allReplyBoxes = document.querySelectorAll('.replybox');
    for(let i=0; i<allReplyBoxes.length; i++){
        allReplyBoxes[i].style.display = "none";
    }
}

function convertToPriceString(priceInCents) {
    let dollars = parseInt(priceInCents / 100);
    let cents = priceInCents % 100;
    return dollars + "." + cents + " CAD";
}

function resetBoeppels() {

    const boeppelIds = ["getisbns", "getisbn", "putisbn"];
    boeppelIds.forEach(boeppelId => changeBoeppelColour(boeppelId, "#FFFFFF"));
}

/** based on this one here: https://stackoverflow.com/a/3379830
 *
 * @param nodeId
 */
function changeBoeppelColour(nodeId, colour) {
    // get the svg
    let boeppel = document.getElementById(nodeId);
    boeppel.setAttribute("fill",
        colour);
}