function numbers(a) {
  const str = a.toString;
  console.log(str.length);

  for (let i = 0; i < str.length; i++) {
    let urjver = 1;
    urjver = Number(a[i]) * urjver;
    let nillber = 0;
    nillber = Number(a[i]) + nillber;
  }
  return urjver - nillber;
}
const result = numbers(234);
console.log(result);
