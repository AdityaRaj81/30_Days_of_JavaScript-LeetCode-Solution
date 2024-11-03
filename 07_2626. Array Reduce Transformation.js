/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}a
 */
var reduce = function(nums, fn, init) {

  let value = init;

  for (const num of nums) {
    value = fn(value, num);
  }

  return value;
};



                  /**
                  OUTPUT
                  
                  Input: 
                  nums = [1,2,3,4]
                  fn = function sum(accum, curr) { return accum + curr; }
                  init = 0
                  Output: 10
                  Explanation:
                  initially, the value is init=0.
                  (0) + nums[0] = 1
                  (1) + nums[1] = 3
                  (3) + nums[2] = 6
                  (6) + nums[3] = 10
                  The final answer is 10.
                  */
