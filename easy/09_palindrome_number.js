// 9. Palindrome Number
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  return x === parseInt(x.toString().split("").reverse().join(""))
    ? true
    : false;
};
