let sum = 0;
function num(a) {
  for (i = 0; i < a.length; i++) {
    if (a[i] % 11 === 0) {
    } else {
      sum = sum + a[i];
    }
  }
  return sum;
}
const result = num([27, 22, 13, 30]);
console.log(result);
