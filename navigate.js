
function gk() {

    window.location.href = "gk option.html";
 }

 function math(){
     window.location.href = "math option.html";
 }
 
 function navigate2(){
    setTimeout(function(){
   window.location.href = "index.html";
    }, 3000);
}

 function show(){
    speechSynthesis.speak(new SpeechSynthesisUtterance("Welcome to Quizzes Infinity"));
 }

 function li(){
     document.getElementById("card").style = "display: block;";
 }

 function goBack(){
    window.location.href = "math listing.html";
  }

 function open_page(){
     window.location.href = "make_quiz.html";
 }  

  function next(){
    document.getElementById("numb").value = "";
    document.getElementById("question").value = "";
    document.getElementById("answer").value = "";
    document.getElementById("op1").value = "";
    document.getElementById("op2").value = "";
    document.getElementById("op3").value = "";
    document.getElementById("op4").value = "";
}