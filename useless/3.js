const boxes = document.getElementsByClassName("box");
const body = document.getElementsByTagName("body");
console.log(body);
body[0].appendChild(newElement);
const newElement = document.createElement("div");
console.log(body);

boxes[0].innerHTML = "BATSUKH";

boxes[0].style =
  "background-color: red; width:100px;height: 200px; color: green";
newElement.style =
  "background-color: red; width:100px;height: 200px; color: green";
