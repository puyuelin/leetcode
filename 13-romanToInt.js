/**
 * 13. 罗马数字转整数
 * 罗马数字包含以下七种字符： I， V， X， L，C，D 和 M。
 * "./images/12-intToRoman.png"
 * 例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 
 *  27 写做  XXVII, 即为 XX + V + II 。
 * 通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。
 * 数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。
 * 同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：
 *  (1) I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
 *  (2) X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
 *  (3) C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
 * 给你一个整数，将其转为罗马数字。
 */

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let num = 0,
    length = s.length;
  for (let i = 0; i < length; i++) {
    switch (s[i]) {
      case "M":
        num += 1000;
        break;
      case "C": {
        if ((i + 1) < length && s[i + 1] === "M") {
          num += 900;
          i++;
        } else if ((i + 1) < length && s[i + 1] === "D") {
          num += 400;
          i++;
        } else {
          num += 100;
        }
        break;
      }
      case "D":
        num += 500;
        break;
      case "X": {
        if ((i + 1) < length && s[i + 1] === "C") {
          num += 90;
          i++;
        } else if ((i + 1) < length && s[i + 1] === "L") {
          num += 40;
          i++;
        } else {
          num += 10;
        }
        break;
      }
      case "L":
        num += 50;
        break;
      case "I": {
        if ((i + 1) < length && s[i + 1] === "X") {
          num += 9;
          i++;
        } else if ((i + 1) < length && s[i + 1] === "V") {
          num += 4;
          i++;
        } else {
          num += 1;
        }
        break;
      }
      case "V":
        num += 5;
        break;
    }
  }
  return num;
};

const s = "LVIII";
console.log(romanToInt(s));