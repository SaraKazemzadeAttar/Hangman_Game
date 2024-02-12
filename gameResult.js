window.onload = function() {
  var resultText = document.getElementById("result-text");
  var playAgainBtn = document.getElementById("play-again-btn");

  var lives = 0; // Replace with your actual lives count
  var gameResult = (lives > 0) ? "win" : "gameover";

  if (gameResult === "win") {
    resultText.textContent = "You Win!";
  } else {
    resultText.textContent = "Game Over";
  }

  // Play again button click event handler
  playAgainBtn.addEventListener("click", function() {
    // Perform any actions needed to restart the game
    // For example, reset game variables, navigate to the game start page, etc.
    console.log("Play again button clicked");
  });
};

var resultMessage = decodeURIComponent(new URLSearchParams(window.location.search).get("result"));
var resultText = document.getElementById("result-text");
resultText.textContent = resultMessage;
var playAgainBtn = document.getElementById("play-again-btn");
playAgainBtn.addEventListener("click", function() {
  // Navigate to the play.html page when the button is clicked
  window.location.href = "play.html";
});