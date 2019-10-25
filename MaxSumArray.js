// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// Example:
// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

var maxSubArray = function(nums) {
	var sum = 0;
	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];
	}
	return Math.abs(sum);
};
console.log(maxSubArray([ -4, -1, 2, 1 ]));
