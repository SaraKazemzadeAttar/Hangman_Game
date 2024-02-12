function sayHello() {
  var name = document.getElementById("nameInput").value;
  var greeting = document.getElementById("greeting");
  var getStartedBtn = document.getElementById("getStartedBtn");

  greeting.innerHTML = "Hello, " + name + "!" + "<br><br> Thank you for visiting our site." + "<br> I hope you have a good day" + "<br><br>Please click the button to start the game dear " + name +"!";
  getStartedBtn.style.display = "inline-block";
}