const buttons = document.getElementById("buttons");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const texts = document.getElementById("texts");
const choices = ["rock", "paper", "scissors"];
const computerChoice = choices[Math.floor(Math.random() * choices.length)];

buttons.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    buttons.classList.add("disabled");
    player1.classList.add("shake");
    player2.classList.add("shake");

    setTimeout(function () {
      player1.classList.remove("shake");
      player2.classList.remove("shake");
      player1.classList.add(event.target.id);
      player2.classList.add(computerChoice);
      texts.classList.add(getResult());
    }, 1800);
  }

  function getResult() {
    if (event.target.id === computerChoice) {
      draw.classList.remove("hidden");
    } else if (
      (event.target.id === "rock" && computerChoice === "scissors") ||
      (event.target.id === "paper" && computerChoice === "rock") ||
      (event.target.id === "scissors" && computerChoice === "paper")
    ) {
      win.classList.remove("hidden");
    } else {
      lose.classList.remove("hidden");
    }
  }
});
