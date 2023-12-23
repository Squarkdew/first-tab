function merge(nums1, m, nums2, n) {
  let lenN = n - 1;
  let genLen = m + n - 1;

  for (let i = m - 1; i >= 0 && lenN >= 0; genLen--) {
    if (nums1[i] > nums2[lenN]) {
      nums1[genLen] = nums1[i];
      i--;
    } else {
      nums1[genLen] = nums2[lenN];
      lenN--;
    }
  }

  for (let i = m - 1; lenN >= 0; genLen--, lenN--) {
    nums1[genLen] = nums2[lenN];
  }
}

let nums1_1 = [1, 2, 3, 0, 0, 0];
let m_1 = 3;
let nums2_1 = [2, 5, 6, 7];
let n_1 = 3;
merge(nums1_1, m_1, nums2_1, n_1);
console.log(nums1_1); // Результат: [1, 2, 2, 3, 5, 6]
