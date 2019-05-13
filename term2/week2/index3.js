var inputField = document.getElementById("inputField");
var addButton = document.getElementById("addButton");
var list = document.getElementById("list");

    addButton.onclick = addItems;
//form.onsubmit
    function addItems(){
        list.innerHTML += "<ul>" + inputField.value + "</ul>";
    }

//function addButtonOnClick(){
    //alert("Frank died");
    //var contentToAdd = document.createElement("ul");
    //contentToAdd.appendChild(document.createTextNode(inputField));
    //contentHere.appendChild(contentToAdd);
    
    
    //contentHere.innerHTML += "<p>" + inputField.value + "<p>";
