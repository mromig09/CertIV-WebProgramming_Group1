var inputField = document.getElementById("inputField");
var addButton = document.getElementById("addButton");
var list = document.getElementById("list");
var removeButton = document.getElementById("removeButton");
    addButton.onclick = addItems;
    removeButton.onclick = deleteAll;

//form.onsubmit
    function addItems(){
        var myNewItemId = 10;

        var newItem = document.createElement("li");
        var newButton = document.createElement("button");
        newButton.classList.add("delete");
        //newButton.setAttribute("name", myNewItemId)
        newButton.appendChild(document.createTextNode("x"));
        newButton.onclick = myOnClick;

        newItem.setAttribute("id", myNewItemId);
        newItem.appendChild(document.createTextNode(inputField.value));
        newItem.appendChild(newButton);
        list.appendChild(newItem);
    }
    
    function myOnClick(){

        this.parentNode.parentNode.removeChild(this.parentNode);
        //var elem = document.getElementById('id');
        //elem.parentNode.removeChild(elem);
        return false;
    }    

    function deleteAll(){
        
        document.getElementById("list").innerHTML = '';
    }
       
    
//function addButtonOnClick(){
    //alert("Frank died");
    //var contentToAdd = document.createElement("ul");
    //contentToAdd.appendChild(document.createTextNode(inputField));
    //contentHere.appendChild(contentToAdd);
    
    
    //contentHere.innerHTML += "<p>" + inputField.value + "<p>";
