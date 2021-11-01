/**
 * 31. 下一个排列
 * 实现获取 下一个排列 的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列
 * （即，组合出下一个更大的整数）。
 * 如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。
 * 必须 原地 修改，只允许使用额外常数空间。
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  if (nums.length < 2) return nums;

  let i = nums.length - 2; 
  while (i >= 0 && nums[i] >= nums[i + 1]) { 
    i--;
  }
  if (i >= 0) { 
    let j = nums.length - 1; 
    while (j >= 0 && nums[j] <= nums[i]) { 
      j--;
    }
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  
  let left = i + 1;
  let right = nums.length - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }

  return nums;
};

const nums = [1, 2, 3];
console.log(nextPermutation(nums));