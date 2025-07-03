function second(a) {
  let c = 0;
  let d = 0;
  c = a[0] * 60;
  d = c + a[1];
  return d;
}
const result = second([12, 4]);
console.log(result);
