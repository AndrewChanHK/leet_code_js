/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  //   return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
  let carry = 0;
  let res = "";
  let i = a.length - 1;
  let j = b.length - 1;
  while (i >= 0 || j >= 0 || carry > 0) {
    const sum =
      (i >= 0 ? parseInt(a[i]) : 0) + (j >= 0 ? parseInt(b[j]) : 0) + carry;
    carry = sum >= 2 ? 1 : 0;
    res = (sum % 2) + res;
    i--;
    j--;
  }
  return res;
};
