const gamecon = document.getElementById("game-container");
gamecon.innerHTML = "";
const start = document.getElementById("start-button");
const restart = document.getElementById("restart-button");

currentHoleIndex = null;
Gameover = null;
myinterval = null;
function click() {
  for (let i = 0; i < 9; i++) {
    const hole = document.createElement("div");
    hole.classList.add("hole");
    hole.id = i.toString();

    const mole = document.createElement("div");
    mole.classList.add("mole");
    mole.addEventListener("click", function () {
      let playerScore = 0;
      const ScoreCount = document.getElementById("score");
      playerScore = ScoreCount.innerText;
      playerScore = Number(playerScore) + 1;
      ScoreCount.innerText = playerScore;
      showmole();
    });
    mole.style.display = "none";

    hole.appendChild(mole);
    gamecon.appendChild(hole);
  }
}

function showmole() {
  HideMole();
  const currentRandomIndex = Math.floor(Math.random() * 9);
  console.log(currentRandomIndex, "randomnumber");
  const currentHole = document.getElementById(currentRandomIndex.toString());
  currentHole.querySelector(".mole").style.display = "block";
  currentHoleIndex = currentRandomIndex;
}

function HideMole() {
  if (currentHoleIndex !== null) {
    const preHole = document.getElementById(currentHoleIndex);
    console.log(preHole, "omnoh holeId");
    preHole.querySelector(".mole").style.display = "none";
  }
}

start.addEventListener("click", function Setup() {
  restartGame();
  showmole();
  Gameover = setInterval(showmole, 1000);
  myinterval = setInterval(TimeLogic, 1000);
});
function restartGame() {
  for (let i = 0; i < 9; i++) {
    const allhole = document.getElementById(i);
    const allmole = allhole.querySelector(".mole");
    allmole.style.display = "none";
  }
  clearInterval(myinterval);
  clearInterval(Gameover);
  let playerScore = document.getElementById("score");
  playerScore.innerText = 0;
  let GameTimer = document.getElementById("timer");
  GameTimer.innerText = 30;
}
restart.addEventListener("click", restartGame);
function TimeLogic() {
  let GameTimer = 30;
  const CountDownTimer = document.getElementById("timer");
  GameTimer = CountDownTimer.innerText;
  GameTimer = Number(GameTimer) - 1;
  CountDownTimer.innerText = GameTimer;
  GameTimer !== -1;
  if (GameTimer <= 0) {
    alert("Togloom duuslaa");
    clearInterval(myinterval);
    clearInterval(Gameover);
    HideMole();
  }
}

window.onload = click;
