const myForm = document.getElementById("myForm");
const myList = document.getElementById("myList");
const taskInput = document.getElementById("taskInput");
const myClearButton = document.getElementById("myClearButton");


myClearButton.addEventListener("click", function(){
    myClearButtonList.innerHTML = "";
});

myForm.onSubmit = function(event) {
    event.preventDefault();

    var newListItem = document.createElement("li");
    newListItem.innerHTML = taskInput.value;

    var newListItemCheckbox = document.createElement("input");
    newListItemCheckbox.setAttribute("type", "checkbox");
    newListItem.appendChild(newListItemCheckbox);
    newListItemCheckbox.addEventListener("change", function()


    var newListItemButton = document.createElement("button");
    newListItemButton.innerHTML = "Delete";
    newListItem.appendChild(newListItemButton);

    newListItemButton.addEventListener("click", function() {
        console.log(this);

    }
}