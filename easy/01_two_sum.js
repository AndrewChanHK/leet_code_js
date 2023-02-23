// 1. Two Sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const tmp = target - num;
    if (map.has(tmp)) {
      return [i, map.get(tmp)];
    } else {
      map.set(num, i);
    }
  }

  return [];
};
