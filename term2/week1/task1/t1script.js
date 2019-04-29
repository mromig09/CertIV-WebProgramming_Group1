var time = document.getElementById("timeButton");
var timeP = document.getElementById("timeHere");
time.onclick = timeButtonClick;
function ourButtonClick() {
    alert("Hello World");
}

function timeButtonClick() {
    timeP.innerHTML = new Date();
}