const email = document.getElementById("HAHA");
const mytovch = document.getElementById("tovch");
function sain() {
  const newdiv = document.createElement("div");
  newdiv.innerText = email.value;
  document.body.appendChild(newdiv);
  email.value = "";
}
