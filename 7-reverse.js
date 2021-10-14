/**
 * 7. 整数反转
 * 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
 * 如果反转后整数超过 32 位的有符号整数的范围 [−2^31,  2^31 − 1] ，就返回 0。
 * 假设环境不允许存储 64 位整数（有符号或无符号）
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const maxValue = Math.pow(2, 31) - 1,
    minValue = -Math.pow(2, 31)
  let res = x >= 0 ? String(x).split("").reverse().join("") : String(x).substr(1).split("").reverse().join("");
  if (res >= minValue && res <= maxValue) return x >= 0 ? res : res * -1;
  return 0;
};

const x = -123;
console.log(reverse(x));