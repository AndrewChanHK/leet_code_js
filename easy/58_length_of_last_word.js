/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let strList = s.trim().split(" ");
  return strList[strList.length - 1].length;
};
