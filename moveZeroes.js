function moveZeroes(arr) {
  let nuli = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[nuli] = arr[i];
      nuli++;
    }
  }

  for (let i = nuli; i < arr.length; i++) {
    arr[i] = 0;
  }
  return arr;
}

console.log(moveZeroes([0, 1, 0, 3, 12]));
