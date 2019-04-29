var contentP = document.getElementById("contentHere");
var button = document.getElementById("ourButton");
button.onclick = ourButtonClick; 
button.onmouseenter = ourButtonMouseEvent;
button.onmouseleave = ourButtonMouseEventLeave;
function ourButtonClick() {
    alert("Hello World");
}

function ourButtonMouseEvent() {
    contentP.innerHTML = "Boo!";
}

function ourButtonMouseEventLeave() {
    contentP.innerHTML = "";
}