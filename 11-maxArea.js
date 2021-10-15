/**
 * 11. 盛最多水的容器
 * 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。
 * 在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。
 * 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * 说明：你不能倾斜容器。
 * 示例 1：
 * "./images/11-maxArea.jpg"
 * 输入：[1,8,6,2,5,4,8,3,7] 输出：49 
 * 解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0,
    right = height.length - 1;
  let capacity = 0,
    maxCapacity = 0;
  while (left < right) {
    capacity = Math.min(height[left], height[right]) * (right - left);
    maxCapacity = Math.max(maxCapacity, capacity);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxCapacity;
};
const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));