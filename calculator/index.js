const input1 = document.getElementById("too1");
const input2 = document.getElementById("too2");
const input3 = document.getElementById("too3");
const suurin = document.getElementById("temdegt");
const suuri2 = document.getElementById("temdegt2");
const tentsuu = document.getElementById("tentsuu");
const container = document.getElementById("main-container");
console.log(tentsuu);
function hariu() {
  let result;
  let result2;
  const value1 = Number(input1.value);
  const value2 = Number(input2.value);
  const value3 = Number(input3.value);
  const suuriValue = suurin.value;
  const suuriValue2 = suuri2.value;

  console.log(value1, value2, value3, suuriValue, suuriValue2);

  if (suuriValue === "+") {
    result = value1 + value2 + value3;
  } else if (suuriValue === "-") {
    result = value1 - value2;
  } else if (suuriValue === "*") {
    result = value1 * value2;
  } else if (suuriValue === "/") {
    result = value1 / value2;
  }
  if (suuriValue2 === "+") {
    result2 = result + value3;
  } else if (suuriValue2 === "-") {
    result2 = result - value3;
  } else if (suuriValue2 === "*") {
    result2 = result * value3;
  } else if (suuriValue2 === "/") {
    result2 = result / value3;
  }
  const resultdiv = document.createElement("div");
  resultdiv.innerText = result2;
  document.body.appendChild(resultdiv);
}

tentsuu.addEventListener("click", hariu);
