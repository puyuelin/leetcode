/**
 * 4. 寻找两个正序数组的中位数
 * 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。
 * 请你找出并返回这两个正序数组的 中位数 。
 */ 

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  /* let arrs = [...nums1, ...nums2];
  let newArrs = arrs.sort((a, b) => {
    return (a - b)
  }); */
  let newArrs = nums1.concat(nums2).sort((a, b) => a - b);
  const length = newArrs.length;
  return length % 2 == 0 ? (newArrs[length / 2] + newArrs[length / 2 - 1]) / 2 : newArrs[Math.floor(length / 2)];
};

const nums1 = [0, 0],
  nums2 = [0, 0];
console.log(findMedianSortedArrays(nums1, nums2));