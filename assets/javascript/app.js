    //variables for right answers seconds that are displayed on screen and for the timer itself.
    var right = 0;
    var sec = 30;
    var myTimer = setInterval(timer, 1000);
 //this is the function for the timer. If the time runs out, it should run the calculate function and display the number of right answers.
 function timer() {
    sec--;
      document.getElementById("timer").innerHTML = "Time Remaining: " + sec;

    if (sec === 0) {
        calculate();
        document.getElementById("num_correct").innerHTML = "Time is up! You have " + right + " correct answers!" 
      right = 0;
      
     stopTimer();
    }
}
//This function stops the timer
function stopTimer(){
    clearInterval(myTimer)
    
}

//This function calculates the correct answers
function calculate(){
    var q1 = $("input[name=question1]:checked").val()
    var q2 = $("input[name=question2]:checked").val()
    var q3 = $("input[name=question3]:checked").val()
    var q4 = $("input[name=question4]:checked").val()
    var q5 = $("input[name=question5]:checked").val()
    var q6 = $("input[name=question6]:checked").val()
    var q7 = $("input[name=question7]:checked").val()
    var q8 = $("input[name=question8]:checked").val()

    if (q1 === "Rhaegal") {
        right++;
    }

    if (q2 === "Braavos") {
        right++;
    }

    if (q3 === "Needle") {
        right++;
    }

    if (q4 === "Lannister") {
        right++;
    }

    if (q5 === "Stark") {
        right++;
    }

    if (q6 === "Baratheon") {
        right++;
    }

    if (q7 === "Targaryen") {
        right++;
    }

    if (q8 === "Ghost") {
        right++;
    }


    //Submit function doesn't work without this line of code
    document.getElementById("num_correct").innerHTML = "You got " + right + " right answers! ";
}

// This function submits the game before the time runs out if you so choose.
function submit () {
    calculate();
    stopTimer();
}