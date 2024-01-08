// Detects if app is running on iPad in non-shortcut mode, to give install instructions

// See: https://stackoverflow.com/a/9039885
// Detect if the browser is an iOS (mobile) browser.
function iOS() {
    return [
            'iPad Simulator',
            'iPhone Simulator',
            'iPod Simulator',
            'iPad',
            'iPhone',
            'iPod'
        ].includes(navigator.platform)
        // iOS detection
        || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}

// See: https://stackoverflow.com/a/21707754
// Detect if the browser is the shortcut app
function app() {
    return window.navigator.standalone === true
}

// If and only if the accessing device is an iOS device, and not yet running in native mode: switch to install instructions.
function detectNonShortcut() {
    if (!app() && iOS()) {
        alert("Battle needs fullscreen.\nTo get fullscreen, select in the top right: \"Share\" -> \"Add to Home Screen\".\nThen start the Battle app.")
    } else {
        document.getElementById('spriteContainer').removeAttribute("hidden")
    }
}
