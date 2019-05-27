var inputField = document.getElementById("inputField");
var addButton = document.getElementById("addButton");

//button reset field
/*function clearText(){
    document.getElementById("addButton").value = "";
}
function reset(){
    var resetButton = document.getElementById("inputField");
    if(resetButton){
        resetButton.value= "";
   }
}*/

//the list
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

//checkbox and complete color
        var newListItemCheckbox = document.createElement("input");
        newListItemCheckbox.setAttribute("type", "checkbox");
        newItem.appendChild(newListItemCheckbox);
        newListItemCheckbox.addEventListener("change", function(){
            console.log(this);
            if(this.checked){
                this.parentNode.style.background = "#a3a3a3";
            }else{
                this.parentNode.style.background = "#ffff";
            }
        })

        newItem.setAttribute("id", myNewItemId);
        newItem.appendChild(document.createTextNode(inputField.value));
        newItem.appendChild(newButton);
        list.appendChild(newItem);
    }
    
    function myOnClick(){
        this.parentNode.parentNode.removeChild(this.parentNode);
        return false;
    }    

    function deleteAll(){
        document.getElementById("list").innerHTML = '';
    }