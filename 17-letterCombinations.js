/**
 * 17. 电话号码的字母组合
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 * "./images/17-letterCombinations.png"
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if(digits.length === 0) return [];
  const map = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz"
  };
  let res = [];
  const dfs = (str, current) => {
    if (str.length === digits.length) {
      res.push(str);
      return;
    }
    const digit = map[digits[current]];
    console.log(digit);
    for (let i = 0; i < digit.length; i++) {
      dfs(str + digit[i], current + 1);
    }
  }
  dfs("", 0);
  return res;
};

const digits = "23";
console.log(letterCombinations(digits));