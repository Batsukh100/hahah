const input = document.getElementById("typing");
const addbutton = document.getElementById("tvch");
const todolists = document.getElementById("todolists");
const allButton = document.getElementById("all");
const activeButton = document.getElementById("active");
const completedButton = document.getElementById("completed");
const test = document.getElementById("test");
function list() {
  todolist.innerHTML = "git a";
  test.style = "display: none";
  const InputValue = input.value;
  console.log(InputValue);
  const todolist = document.createElement("div");
  todolist.innerHTML = `
  <div id="jagsaalt" style="display: flex; justify-content: space-between;"><div style="display: flex;"><input id="checklii" onclick="dagger" type="checkbox"/> <div>${InputValue}</div></div> 
  <button id="rem">Delete</button></div> `;

  todolists.appendChild(todolist);

  const rmButton = todolist.querySelector("#rem");
  rmButton.addEventListener("click", function () {
    todolists.removeChild(todolist);
  });

  function dagger() {
    todolist.querySelector("#jagsaalt").classList.toggle("mystyle");
  }
  const todoCheckbox = todolist.querySelector("#checklii");
  todoCheckbox.addEventListener("change", dagger);
}
addbutton.addEventListener("click", list);
addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    list();
  }
});

function ToDocompletedButton() {
  const todoCheckbox = todolist.querySelector("#checklii");
  var text = document.getElementById("text");
  if (checkBox.checked === true) {
    const duussan = document.createElement("div");
  }
}
