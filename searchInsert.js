/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  return binarySearch(0, nums.length - 1, nums, target);
};

var binarySearch = function (low, high, nums, target) {
  let mid = Math.floor((high + low) / 2);
  if (nums[mid] === target) {
    return mid;
  } else if (high - low === 1) {
    if (nums[low] < target) return high;
    return low;
  } else {
    if (nums[mid] > target) {
      return binarySearch(low, mid - 1, nums, target);
    } else {
      return binarySearch(mid + 1, high, nums, target);
    }
  }
};
console.log(searchInsert([1, 3], 0));
