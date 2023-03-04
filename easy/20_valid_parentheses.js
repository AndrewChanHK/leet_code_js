/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const map = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ]);
  const queue = [];
  const list = s.split("");
  for (let i = 0; i < list.length; i++) {
    const e = list[i];
    if (map.has(e)) {
      queue.push(e);
    } else if (map.get(queue.pop()) != e) {
      return false;
    }
  }
  return queue.length == 0;
};
