/**
 * 8. 字符串转换整数 (atoi)
 * 函数 myAtoi(string s) 的算法如下：
 *  (1) 读入字符串并丢弃无用的前导空格
 *  (2) 检查下一个字符（假设还未到字符末尾）为正还是负号，读取该字符（如果有）。 
 *      确定最终结果是负数还是正数。 如果两者都不存在，则假定结果为正。
 *  (3) 读入下一个字符，直到到达下一个非数字字符或到达输入的结尾。字符串的其余部分将被忽略。
 *  (4) 将前面步骤读入的这些数字转换为整数（即，"123" -> 123， "0032" -> 32）。
 *      如果没有读入数字，则整数为 0 。必要时更改符号（从步骤 2 开始）。
 *  (5) 如果整数数超过 32 位有符号整数范围 [−2^31,  2^31 − 1] ，需要截断这个整数，使其保持在这个范围内。
 *      具体来说，小于 −2^31 的整数应该被固定为 −2^31 ，大于 2^31 − 1 的整数应该被固定为 2^31 − 1 。
 *  (6) 返回整数作为最终结果。
 * 注意：本题中的空白字符只包括空格字符 ' ' 。除前导空格或数字后的其余字符串外，请勿忽略 任何其他字符。
 */

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const maxValue = Math.pow(2, 31) - 1,
    minValue = -Math.pow(2, 31);

  let res = parseInt(s);
  if (isNaN(res)) {
    return 0;
  } else {
    res = res < minValue ? minValue : res;
    res = res > maxValue ? maxValue : res;
  }
  return res;
};

const s = "with words";
console.log(myAtoi(s));