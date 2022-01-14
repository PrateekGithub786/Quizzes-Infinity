function SignIn() {
  if (nameL != "") {
    setTimeout(function () {
      window.location = "index.html";
    }, 1000)
  }
  nameL = document.getElementById("nameL").value;
  emailL = document.getElementById("emailL").value;
  //adding item in local storage
  localStorage.setItem("nl", nameL);
  localStorage.setItem("el", emailL);
  
}

function hello() {
  localN = localStorage.getItem("nl");
  localE = localStorage.getItem("el");
  document.getElementById("Name1").innerHTML = localN;
  document.getElementById("Name2").innerHTML = localN;
  document.getElementById("Name3").innerHTML = localN;
  document.getElementById("remove").style.display = "none";
  document.title = "Quizzes Infinity | " + localN;
  function getFileData(myFile){
    var file = myFile.files[0];  
    var filename = file.name;
    console.log(filename)
 }
}

function onSignIn(googleUser) {
  document.getElementsByClassName("g-signin2").style.display = "none";
  document.getElementsByClassName("sign_out").style.display = "block";
  window.location = "index.html";
  var profile = googleUser.getBasicProfile();
  $("#Name1").text(profile.getName());
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    alert('You have been signed out successfully');
    $(".g-signin2").css("display", "block");
    $(".sign_out").css("display", "none");
  });
}