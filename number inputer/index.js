const Input = document.getElementById("LOL");
const container = document.getElementById("container");
const addbutton = document.getElementById("ADD");

function Shot() {
  const numbers = document.createElement("div");
  numbers.innerHTML = Input.value;
  container.appendChild(numbers);
}
addbutton.addEventListener("click", Shot);
