function Positive(number) {
  if (number > 0) {
    return "positive";
  } else {
    return "negative";
  }
}
const result = Positive(-123);
console.log(result);
