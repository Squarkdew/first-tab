function pivotIndex(arr) {
  let totalSum = 0;

  for (let i = 0; i < arr.length; i++) {
    totalSum += arr[i];
  }

  let leftSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (leftSum === totalSum - leftSum - arr[i]) {
      return i;
    }

    leftSum += arr[i];
  }

  return -1;
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
