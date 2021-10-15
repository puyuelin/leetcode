/**
 * 20. 有效的括号
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 * 有效字符串需满足：
 * (1) 左括号必须用相同类型的右括号闭合。
 * (2) 左括号必须以正确的顺序闭合。
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const map = {
    "(": ")",
    "{": "}",
    "[": "]"
  }
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] in map) {
      stack.push(s[i]);
      continue;
    }
    if (map[stack.pop()] !== s[i]) return false;
  }
  return !stack.length;
};

// const s = "()[]{}";
const s = "([)]";
console.log(isValid(s));