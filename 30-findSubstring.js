/**
 * 30. 串联所有单词的子串
 * 给定一个字符串 s 和一些 长度相同 的单词 words 。
 * 找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。
 * 注意子串要与 words 中的单词完全匹配，中间不能有其他字符 ，但不需要考虑 words 中单词串联的顺序。
 */

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  if (!s || !words || !words.length) return [];

  // 把所有的单词words存到一个哈希表wordsMap里，key存单词，value 存单词出现的个数
  let wordsMap = new Map();
  for (const word of words) {
    wordsMap.set(word, (wordsMap.get(word) || 0) + 1);
  }

  let wordLength = words[0].length;
  let allWordsLen = wordLength * words.length;

  let result = [];
  // 扫描s的每个子串，s每次只移动一位
  for (let i = 0; i < s.length - allWordsLen + 1; i++) {
    let subS = s.substring(i, i + allWordsLen);
    let map = new Map();
    let tmpLength = 0;

    for (let j = 0; j < allWordsLen; j += wordLength) {
      let curWord = subS.substring(j, j + wordLength);
      map.set(curWord, (map.get(curWord) || 0) + 1);

      // words不包含该单词，直接跳过，判断下一个单词
      if (!wordsMap.has(curWord)) {
        break;
      }
      // 当前单词的数量比words中该单词的数量还多，也跳过判断下一个单词
      if (map.get(curWord) > wordsMap.get(curWord)) {
        break;
      }

      tmpLength += wordLength;
    }
    // 长度相等，说明该字串可以拆成words里的所有单词
    if (tmpLength === subS.length) {
      result.push(i);
    }
  }
  return result;
};

const s = "barfoothefoobarman",
  words = ["foo", "bar"];
console.log(findSubstring(s, words)); // [0,9]