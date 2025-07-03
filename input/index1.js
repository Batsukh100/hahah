const Input = document.getElementById("input");
const Textu = document.getElementById("text-container");
const DisplayWords = [
  "apple",
  "banana",
  "orange",
  "lemon",
  "kiwi",
  "strawberry",
];
function RenderWords(word) {
  Textu.innerHTML = "";
  for (let i = 0; i < word.length; i++) {
    const Aguulah = document.createElement("div");
    Aguulah.innerHTML = word[i];
    Textu.appendChild(Aguulah);
  }
}

Input.addEventListener("input", function () {
  const SearchValue = Input.value;
  console.log(SearchValue, "Input value shuu");
  const filterWords = [];
  for (let i = 0; i < DisplayWords.length; i++) {
    if (DisplayWords[i].indexOf(SearchValue) !== -1) {
      filterWords.push(DisplayWords[i]);
    }
  }
  RenderWords(filterWords);
});
RenderWords(DisplayWords);
