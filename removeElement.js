/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let i = 0;
  let j = 0;
  while (i < nums.length && j < nums.length) {
    if (nums[j] === val) {
      j++;
    } else {
      nums[i] = nums[j];
      i++;
      j++;
    }
  }
};
removeElement([0,1,2,2,3,0,4,2], 2);
