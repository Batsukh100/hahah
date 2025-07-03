let max = 0;
function biggest(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}
const result = biggest([213122, 23, 13232, 42]);
console.log(result);
