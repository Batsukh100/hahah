const input = document.getElementById("typing");
const addbutton = document.getElementById("add");
const fruits = document.querySelector(".fruts");
const different = document.getElementById("different");
const differentnum = document.getElementById("differentnum");

function load() {
  const InputValue = input.value;
  console.log(InputValue);
  const newfruit = document.createElement("div");

  newfruit.innerHTML = `<span>${InputValue}</span>
 <span>Count</span><span id="fruit-amount">1</span>
  <button id="inc">Increase</button>
  <button id="rem">Remove</button>`;

  fruits.appendChild(newfruit);
  let fruitCount = differentnum.innerText;
  fruitCount = Number(fruitCount) + 1;
  differentnum.innerText = fruitCount;
  const addfruit = newfruit.querySelector("#inc");
  addfruit.addEventListener("click", function () {
    const fruitAmountSpan = newfruit.querySelector("#fruit-amount");
    console(fruitAmountSpan);
  });
}
addbutton.addEventListener("click", load);
addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    load();
  }
});

// newfruit.innerHTML = `
// <span>${InputValue}</span>
// <span>
// Count:<span id="fruit-amount">1</span>
// </span>
// <button id="inc">Increase</button>
// <button id="rem">Remove</button>
// `;
// fruits.appendChild(newfruit);
// const count = fruits;
// document.getElementById("differentnum").textContent = count.childElementCount;
