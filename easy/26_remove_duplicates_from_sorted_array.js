/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    let e = nums[i];
    if (nums[k] != e) nums[++k] = e;
  }
  return k + 1;
};
