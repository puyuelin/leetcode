/**
 * 6. Z 字形变换
 * 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。
 * 比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：
 * "./images/6-convert.png"
 * 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (s.length <= numRows || numRows === 1) return s;
  const arr = new Array(numRows).fill("");
  let down = true,
    row = 0;
  for (let i = 0; i < s.length; i++) {
    arr[row] += s[i];
    if (down) {
      row++;
    } else {
      row--;
    }
    if (row === 0) down = true;
    if (row === numRows - 1) down = false;
  }
  return arr.join("");
};
const s = "AB",
  numRows = 3;
console.log(convert(s, numRows));