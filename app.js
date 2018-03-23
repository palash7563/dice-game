let scores = [0, 0];
let roundScore = 0;
let activePlayer = 0;

document.querySelector(".dice").style.display = "none";

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

document.querySelector(".btn-roll").addEventListener("click", function() {
  const dice = Math.floor(Math.random() * 6) + 1;
  const diceDom = document.querySelector(".dice");
  diceDom.style.display = "block";
  diceDom.src = `image/dice-${dice}.png`;

  if (dice !== 1) {
    roundScore += dice;
    document.querySelector(".current-" + activePlayer).textContent = roundScore;
  } else {
  }
});
