/**
 * 29. 两数相除
 * 给定两个整数，被除数 dividend 和除数 divisor。
 * 将两数相除，要求不使用乘法、除法和 mod 运算符。
 * 返回被除数 dividend 除以除数 divisor 得到的商。
 * 整数除法的结果应当截去（truncate）其小数部分，例如：truncate(8.345) = 8 以及 truncate(-2.7335) = -2
 * 提示：
 * (1) 被除数和除数均为 32 位有符号整数。
 * (2) 除数不为 0。
 * (3) 假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−2^31,  2^31 − 1]。本题中，如果除法结果溢出，则返回 2^31 − 1。
 */

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  let sign = true;
  if (dividend < 0) {
    dividend = -dividend;
    sign = !sign;
  }
  if (divisor < 0) {
    divisor = -divisor;
    sign = !sign;
  }

  let res = 0;
  while (divisor <= dividend) {
    let count = 1;
    let tempDivisor = divisor;
    while (tempDivisor <= dividend) {
      dividend -= tempDivisor;
      res += count;
      count *= 2;
      tempDivisor *= 2;
    }
  }

  const minValue = -Math.pow(2, 31);
  const maxValue = Math.pow(2, 31) - 1;

  if (sign) return Math.min(maxValue, res);
  else return Math.max(minValue, -res);
};
const dividend = 10,
  divisor = 3
console.log(divide(dividend, divisor));