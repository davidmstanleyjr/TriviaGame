    var right = 0;
    var sec = 30;
    var myTimer = setInterval(timer, 1000);
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
function stopTimer(){
    clearInterval(myTimer)
    
}
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


    
    document.getElementById("num_correct").innerHTML = "You got " + right + " right answers! ";
}

function submit () {
    calculate();
    stopTimer();
}