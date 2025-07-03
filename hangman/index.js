const letterscon = document.getElementById("letters");
const answerDiv = document.getElementById("answer");
const container = document.getElementsByClassName("keyboard-con");
const fail = document.getElementById("fail");
const ImageTag = document.getElementById("img");
const LoseR = document.getElementById("lose");
const Winner = document.getElementById("win");
const restartButton = document.getElementById("restart");
const tryButton = document.getElementById("try");
const allcontainer = document.getElementById("ALL");
const words = [
  "BAYONET",
  "SAPPHIRE",
  "GUT KNIFE",
  "LONGDOG",
  "DRAGON LORE",
  "DOPPLER",
  "CASE HARDENED",
  "BUTTERFLY",
  "KARAMBIT",
  "FADE",
  "PRINTSTREAM",
  "SHADOW DAGGERS",
];
let clickedletters = [];
let fails = 0;
const keyboard = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
];
function writeletters() {
  for (let i = 0; i < keyboard.length; i++) {
    let newdiv = document.createElement("button");
    newdiv.innerText = keyboard[i];
    newdiv.addEventListener("click", function () {
      clickedletters.push(keyboard[i]);
      newdiv.disabled = true;
      if (CurrentWordIndex.includes(keyboard[i])) {
        fails = fail.innerText;
        fails = Number(fails);
        fail.innerText = fails;
      } else {
        fails = fail.innerText;
        fails = Number(fails) + 1;
        fail.innerText = fails;
        ImageTag.src = `${fails}.jpg`;
        if (fails === 7) {
          YouLose();
        }
      }
      console.log(clickedletters);

      randomword();
    });

    letterscon.appendChild(newdiv);
  }
}
const RandomWordIndex = Math.floor(Math.random() * words.length);
const CurrentWordIndex = words[RandomWordIndex];
console.log(CurrentWordIndex);
function randomword() {
  let word = "";
  for (let i = 0; i < CurrentWordIndex.length; i++) {
    if (
      CurrentWordIndex[i] === " " ||
      clickedletters.includes(CurrentWordIndex[i])
    ) {
      word = word + CurrentWordIndex[i];
    } else {
      word = word + "_";
    }
  }
  answerDiv.innerHTML = word;
  if (answerDiv.innerHTML === CurrentWordIndex) {
    YouWin();
  }
}
function YouLose() {
  LoseR.style.display = "block";
  allcontainer.style.display = "background-color: rgba(0, 0, 0, 0.5);";
}
function YouWin() {
  Winner.style.display = "block";
  allcontainer.style.display = "background-color: rgba(0, 0, 0, 0.5);";
}
function restart() {
  // const RandomWordIndex = Math.floor(Math.random() * words.length);
  // const CurrentWordIndex = words[RandomWordIndex];
  // console.log(CurrentWordIndex);
  // randomword();
  // let fails = document.getElementById("fail");
  // fails.innerText = 0;
  // ImageTag.src = "./0.jpg";
  // LoseR.style.display = "none";
  // Winner.style.display = "none";
  window.location.reload();
}
function retry() {
  window.location.reload();
}
tryButton.addEventListener("click", retry);
restartButton.addEventListener("click", restart);
window.onload = randomword();
window.onload = writeletters();
