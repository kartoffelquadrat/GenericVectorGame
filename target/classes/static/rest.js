let backendLocation = "http://127.0.0.1:8080/bookstore"

function getIsbns() {

    // reset all other replies / boeppels
    resetAllReplies();
    resetBoeppels();

    // update request log
    let targetResource = backendLocation + "/isbns";
    updateRequestLog("GET", targetResource);
    // contact backend
    fetch(targetResource)
        .then(result => result.json())
        .then(json => {
            if (json.error) // assumes that the server is nice enough to send an error message
            {
                changeBoeppelColour("getisbns", "#ff0000");
                updateReplyLog(json.status, json.error, "");
                animateShake("book-details-lookup");
            } else {
                // standard logic in case of success here.
                changeBoeppelColour("getisbns", "#5dd4a2");
                updateReplyLog(200, "OK", JSON.stringify(json, null, 4));
                document.getElementById("isbnlistdiv").style.display = null;
                let booklist = json.toString().replaceAll(",", "\n");
                document.getElementById("isbnlisttext").innerText = booklist;
            }
        })
        .catch(error => {
            changeBoeppelColour("getisbns", "#ff0000");
            // general connection error handling here
            updateReplyLog("", "Backend not reachable!", "");
            console.log(error);
            animateShake("isbn-list-lookup");
        });
}

function getBookDetails() {

    // reset all other replies / boeppels
    resetAllReplies();
    resetBoeppels();

    // extract ISBN
    let isbn = document.getElementById("lookup-isbn").value;
    if (stringIsEmpty(isbn)) {
        isbn = "-";
    }

    // update request log
    let targetResource = backendLocation + "/isbns/" + isbn;
    updateRequestLog("GET", targetResource);

    // Look up details for Book
    fetch(targetResource)
        .then(result => {
            result.json()
                .then(json => {
                        // Default case: Server replied with a JSON that either contains status code and error message,
                        // or 200 and body payload.
                        if (json.error) {
                            // Non-200 status code in JSON.
                            changeBoeppelColour("getisbn", "#ff0000");
                            updateReplyLog(json.status, json.error, "");
                            animateShake("book-details-lookup");
                        } else {
                            // 200 status code in JSON.
                            // standard logic in case of success here.
                            changeBoeppelColour("getisbn", "#5dd4a2");
                            updateReplyLog(200, "OK", JSON.stringify(json, null, 4));
                            document.getElementById("book-details-div").style.display = null;
                            document.getElementById("book-details-title").innerText = json.title;
                            document.getElementById("book-details-author").innerText = json.author;
                            document.getElementById("book-details-price").innerText = convertToPriceString(json.priceInCents);
                            document.getElementById("book-details-abstract").innerText = json.bookAbstract;
                        }
                    }
                )
                .catch(() => {
                    // special case: server was reachable, returned 200, but the payload was empty (no results)
                    changeBoeppelColour("getisbn", "#5dd4a2");
                    updateReplyLog("200", "OK", "-EMPTY-");
                    document.getElementById("book-nomatch-div").style.display = null;
                })
        })
        .catch(error => {
            // general connection error handling here
            changeBoeppelColour("getisbn", "#ff0000");
            updateReplyLog("", "Backend not reachable!", "");
            animateShake("book-details-lookup");
        });
}

function addBook() {

    // // reset all other replies / boeppels
    // resetAllReplies();
    // resetBoeppels();
    //
    // // update request log
    // let targetResource = backendLocation + "/isbns";
    // updateRequestLog("GET", targetResource);
    // // contact backend
    // fetch(targetResource)
    //     .then(result => result.json())
    //     .then(json => {
    //         if (json.error) // assumes that the server is nice enough to send an error message
    //         {
    //             changeColour("getisbns", "#ff0000");
    //             updateReplyLog(json.status, json.error, "");
    //             animateShake("book-details-lookup");
    //         } else {
    //             // standard logic in case of success here.
    //             changeColour("getisbns", "#5dd4a2");
    //             updateReplyLog(200, "OK", JSON.stringify(json, null, 4));
    //             document.getElementById("isbnlistdiv").style.display = null;
    //             let booklist = json.toString().replaceAll(",", "\n");
    //             document.getElementById("isbnlisttext").innerText = booklist;
    //         }
    //     })
    //     .catch(error => {
    //         changeColour("getisbns", "#ff0000");
    //         // general connection error handling here
    //         updateReplyLog("", "Backend not reachable!", "");
    //         console.log(error);
    //         animateShake("isbn-list-lookup");
    //     });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function animateShake(elementName) {

    document.getElementById(elementName).classList.add("shake-horizontal");
    sleep(800).then(() => {
        document.getElementById(elementName).classList.remove("shake-horizontal");
    });
}

// https://stackoverflow.com/a/21732631
function stringIsEmpty(value) {
    return value ? value.trim().length == 0 : true;
}

function updateRequestLog(method, url) {
    let requestText = "[" + method + "]  " + url;
    document.getElementById("console-log-request").innerText = requestText;
}

/**
 * Herlper function to fill content of "last reply" box
 * @param code as the retrieved HTML code (may be empty)
 * @param message as the code-corresponding message / or general error message
 * @param content as the body payload (if existing)
 */
function updateReplyLog(code, message, content) {

    // worst, case connection error:
    if (code === "") {
        document.getElementById("console-log-reply").innerText = message;
        return;
    }

    // better case: the server replied
    let statusline = "[" + code + "] (" + message + ")";
    if (code == 200) {
        statusline = statusline + "\n\nBody:\n" + content;
    }
    document.getElementById("console-log-reply").innerText = statusline;

}