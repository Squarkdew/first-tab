function rotate(arr, n) {
  arr.unshift(...arr.splice(-n));
  return arr;
}

console.log(rotate([1, 2, 3, 4, 5], 3));
