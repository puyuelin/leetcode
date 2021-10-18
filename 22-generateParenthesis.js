/**
 * 22. 括号生成
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * 有效括号组合需满足：左括号必须以正确的顺序闭合。
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const res = [];
  if (n <= 0) return res;

  const dfs = (item, left, right) => {
    if (left > n || right > left) return;
    if (item.length == 2 * n) {
      res.push(item);
      return;
    }
    dfs(item + "(", left + 1, right);
    dfs(item + ")", left, right + 1);
  }

  dfs("", 0, 0);
  return res;
};
const n = 3;
console.log(generateParenthesis(n));