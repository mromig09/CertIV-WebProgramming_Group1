var text = "";
var i = 0;
while (i <= 10) {
    if (i == 5) {
        console.log("Woah mom i counted to " + i + "!");
        i++;   
    } 
    else if (i == 10) {
        console.log("Look mom i can count to " + i + "!");
        i++;
    }
    else{
        console.log("Counting up. . . Im at: " + i);
        i++;    
    }   
}
document.getElementById("count").innerHTML = text;