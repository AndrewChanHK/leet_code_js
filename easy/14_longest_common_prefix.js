/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  var ans = 0;
  var min = Math.min(...strs.map((e) => e.length));

  for (let i = 0; i < min; i++) {
    if (strs.map((e) => e[i]).every((e) => e[i] === strs[0][i])) {
      ans = i;
    }
  }

  return strs[0].slice(0, ans);
};
