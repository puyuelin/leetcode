/**
 * 5. 最长回文子串
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 */

/**
 * @param {string} s
 * @return {string}
 * 动态规划，(s[i] === s[j] && dp[i + 1][j - 1]) || (s[i] === s[j] && ((j + 1) - i) < 3)
 */
var longestPalindrome = function (s) {
  const length = s.length;
  const dp = new Array(length).fill(false).map((item) => new Array(length).fill(false));

  let maxStartIndex = 0,
    maxLength = 1;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (i === j) {
        dp[i][j] = true;
      }
    }
  }

  // s[i][j] = (s[i] === s[j] && dp[i + 1][j - 1]) || (s[i] === s[j] && ((j + 1) - i) < 3)
  // s[i][j] = (当前首、尾字符相同 && 首、尾各往中间缩1位依旧是回文串)
  // 或 (当前首、尾字符相同 && 当前首、尾位置间隔 < 3) 如 "bb" 这种长度小于3时，只要保证 首、尾字符相同即可
  for (let j = 1; j < length; j++) {
    for (let i = 0; i < j; i++) {
      if ((s[i] === s[j] && dp[i + 1][j - 1]) || (s[i] === s[j] && (j - i + 1) < 3)) {
        dp[i][j] = true;
        if ((j - i + 1) > maxLength) {
          maxStartIndex = i;
          maxLength = j - i + 1;
        }
      } else {
        dp[i][j] = false;
      }
    }
  }
  return s.substr(maxStartIndex, maxLength);
};

const s = "babad";
console.log(longestPalindrome(s));