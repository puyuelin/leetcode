/**
 * 15. 三数之和
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，
 * 使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
 * 注意：答案中不可以包含重复的三元组。
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let length = nums.length;
  if (length < 3) {
    return [];
  }
  nums.sort((a, b) => a - b);
  let res = [];

  for (let i = 0; i < length; i++) {
    if (nums[i] > 0) {
      return res;
    }
    if (i > 0 && nums[i] === nums[i - 1])
      continue
    let left = i + 1
    let right = length - 1
    while (left < right) {
      if (nums[i] + nums[left] + nums[right] == 0) {
        res.push([nums[i], nums[left], nums[right]])

        while (left < right && nums[left] == nums[left + 1]) {
          left++
        }

        while (left < right && nums[right] === nums[right - 1]) {
          right--
        }

        left++
        right--
      } else if (nums[i] + nums[left] + nums[right] > 0) {
        right--
      } else {
        left++
      }
    }


  }
  return res
};
const nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));