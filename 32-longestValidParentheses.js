/**
 * 32. 最长有效括号
 * 给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。
 */

/**
 * 1. 对于遇到的每个 "(" ，我们将它的下标放入栈
 * 2. 对于遇到的每个 ")" ，我们先弹出栈顶元素表示匹配了当前右括号：
 *    (1) 如果栈为空，说明当前的右括号为没有被匹配的右括号， 
 *        我们将其下标放入栈中来更新我们之前提到的「最后一个没有被匹配的右括号的下标」
 *    (2) 如果栈不为空，当前右括号的下标减去栈顶元素 即为「以该右括号为结尾的最长有效括号的长度」
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let result = 0;
  if (s.length === 0 || s.length === 1) return result;

  let stack = [-1];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length < 1) {
        stack.push(i);
      } else {
        result = Math.max(result, i - stack[stack.length - 1]);
      }
    }
  }
  return result;
};

const s = ")()())";
console.log(longestValidParentheses(s));