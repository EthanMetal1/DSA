var removeDuplicates = function (nums) {
  let i = 0;
  let j = 1;
  while (i < nums.length && j < nums.length) {
    if (nums[i] === nums[j]) {
      j++;
    } else {
      i++;
      nums[i] = nums[j];
      j++;
    }
  }
};
removeDuplicates([0,0,1,1,1,2,2,3,3,4]);
