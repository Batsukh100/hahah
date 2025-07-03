const input = document.getElementById("typing");
const addbutton = document.getElementById("add");
const different = document.querySelector("#different");
const fruits = document.querySelector(".fruits");
const fruitnum = document.querySelector("#fruitnum");
let fruitId = 0;
function load() {
  const InputValue = input.value;
  console.log(InputValue);
  const fr = document.createElement("div");
  fruitId++;
  const currentId = fruitId;
  fr.innerHTML = `
    <div>
      <span>${InputValue}</span>
      <span>
        Count:<span id="fruit-${currentId}"><span id="fruit-amount">1</span></span>
      </span>
      <button id="inc">Increase</button>
      <button id="rem">Remove</button>
    </div>`;
  fruits.appendChild(fr);

  fruitnum.innerHTML = Number(fruitnum.innerHTML) + 1;
  console.log(fruitnum.innerHTML);
  const count = fruits;
  let DifferentOfNum = (document.getElementById("differentnum").textContent =
    count.childElementCount);

  function increaseFruitAmount() {
    const fruitAmountSpan = fr.querySelector("#fruit-amount");
    let fruitAmount = fruitAmountSpan.innerText;
    fruitAmount = Number(fruitAmount) + 1;
    fruitAmountSpan.innerText = fruitAmount;
    console.log(fruitAmount);

    const bugd = document.getElementById("fruitnum");
    let allamountoffruit = bugd.innerText;
    allamountoffruit = Number(allamountoffruit) + 1;
    bugd.innerText = allamountoffruit;
  }
  const increaseButton = fr.querySelector("#inc");
  increaseButton.addEventListener("click", increaseFruitAmount);

  const rmButton = fr.querySelector("#rem");
  rmButton.addEventListener("click", function () {
    fruits.removeChild(fr);
  });

  input.value = "";
}

addbutton.addEventListener("click", load);
addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    load();
  }
});
