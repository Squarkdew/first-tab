function searchInsert(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i;
    }
  }
  return arr.length;
}

console.log(searchInsert([1, 2, 4, 4], 7));
