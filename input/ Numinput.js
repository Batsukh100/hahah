const Input = document.getElementById("input");
const Too = document.getElementById("Number-container");
const DifferentNumbers = ["20", "60", "30", "25", "11", "40"];
function renderNumbers(Numbers) {
  Too.innerHTML = "";
  for (let i = 0; i < Numbers.length; i++) {
    const Aguulah = document.createElement("div");
    Aguulah.innerHTML = Numbers[i];
    Too.appendChild(Aguulah);
  }
}

Input.addEventListener("input", function Search() {
  const InputValue = Input.value;
  console.log(InputValue, "input value shuu");
  const filter = [];
  for (let i = 0; i < DifferentNumbers.length; i++) {
    const different = Number(DifferentNumbers[i]);
    if (different > InputValue) {
      filter.push(different);
    }
  }
  renderNumbers(filter);
});
renderNumbers(DifferentNumbers);
