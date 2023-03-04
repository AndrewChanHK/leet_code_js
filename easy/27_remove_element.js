/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    const e = nums[i];
    if (e != val) nums[k++] = e;
  }
  return k;
};
