
var view = document.getElementsByClassName('view');
view[0].addEventListener('mouseover',hoverOnScript);
view[0].addEventListener('mouseout',hoverAwayScript);

function hoverOnScript() {
    console.log("Hover");
    view[0].classList.remove("noShadow")
    view[0].classList.add("shadowView")
}
function hoverAwayScript() {
    console.log("Hover away");
    view[0].classList.remove("shadowView");
    view[0].classList.add("noShadow")
}
