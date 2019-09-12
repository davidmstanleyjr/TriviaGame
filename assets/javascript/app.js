

function calculate(){
    var q1 = document.trivia.question1.value;
    var q2 = document.trivia.question2.value;
    var q3 = document.trivia.question3.value;
    var q4 = document.trivia.question4.value;
    var q5 = document.trivia.question5.value;
    var q6 = document.trivia.question6.value;
    var q7 = document.trivia.question7.value;
    var q8 = document.trivia.question8.value;
    var right = 0;

    if (question1 === "Rhaegal") {
        right++;
    }

    if (question2 === "Braavos") {
        right++;
    }

    if (question3 === "Needle") {
        right++;
    }

    if (question4 === "Lannister") {
        right++;
    }

    if (question5 === "Stark") {
        right++;
    }

    if (question6 === "Baratheon") {
        right++;
    }

    if (question7 === "Targaryen") {
        right++;
    }

    if (question8 === "Ghost") {
        right++;
    }


    document.getElementById("post-submit").style.visibility="visible";
    document.getElementById("num_correct").innerHTML = "You got " + right + " right answers! ";
}