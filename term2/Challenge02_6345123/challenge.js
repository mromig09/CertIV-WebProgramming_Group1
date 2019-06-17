var contentP = document.getElementById("inputField");
var button = document.getElementById("submit");
button.onclick = submitClick; 
var answer = form.quiz.answer.value;
var correct = 0;
function submitClick() {

    if (answer == "D,D,A"){
        alert("3/3 correct");
        correct++;
    }
    else{
        alert("incorrect, ya scrub");
        incorrect++;
    }

    alert (correct);
}

/*
//show results on submit
submit.addEventListener("click", showResults);

    
} */
