// iOS fullscreen apps have a rubberband effec ton y axis. You can scroll out of viewport, the visible selection then bounces back to default once you release. To disable this effect, this script disables all drag listeners.

// This does not work...
// function disableRubberBand() {
//     document.addEventListener('touchmove', function(e) {
//         e.preventDefault();
//     }, { passive: false });
//
//     window.addEventListener("touchstart", e=>e.preventDefault(), {passive:false});
//     window.addEventListener("touchmove", e=>e.preventDefault(), {passive:false});
//     alert("Rubber gone")
//     console.log("no more rubber")
// }