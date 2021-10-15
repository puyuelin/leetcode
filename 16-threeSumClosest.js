/**
 * 16. 最接近的三数之和
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。
 * 找出 nums 中的三个整数，使得它们的和与 target 最接近。
 * 返回这三个数的和。假定每组输入只存在唯一答案。
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => {
    return a - b
  });

  let res = nums[0] + nums[1] + nums[2]
  let length = nums.length;

  for (let i = 0; i < length; i++) {
    let left = i + 1;
    let right = length - 1
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right]
      if (sum === target) {
        return target;
      } else if (sum < target) {
        left++
      } else if (sum > target) {
        right--
      }
      if (Math.abs(target - sum) < Math.abs(target - res)) {
        res = sum
      }
    }
  }
  return res;
};

const nums = [-1, 2, 1, -4],
  target = 1;
console.log(threeSumClosest(nums, target));