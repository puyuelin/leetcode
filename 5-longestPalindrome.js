/**
 * 5. 最长回文子串
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length === 0) return "";
  let res = s[0];
  const dp = [];
};

const s = "babad";
console.log(longestPalindrome(s));