// 13. Roman to Integer
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  var map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  var prev = 0;
  var res = 0;

  for (let i = 0; i < s.length; i++) {
    var tmp = map[s[i]];
    res += tmp;

    if (tmp > prev) res -= prev * 2;

    prev = tmp;
  }

  return res;
};
