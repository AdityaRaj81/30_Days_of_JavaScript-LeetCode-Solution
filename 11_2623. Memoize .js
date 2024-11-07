/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const cache = {}; // Our 'memory' - a simple JavaScript object

  return function (...args) {
    // The inner function that does the magic
    const key = String(args); // Creates a unique key from the arguments

    if (key in cache) {
      // Have we seen this input before?
      return cache[key]; // Yes! Return the stored result
    }

    const result = fn(...args); // No? Call the original function
    cache[key] = result; // Store the result for next time
    return result; // Return the calculated result
  };
}

/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */

                        /**
                        Output
                        Input:
                        fnName = "sum"
                        actions = ["call","call","getCallCount","call","getCallCount"]
                        values = [[2,2],[2,2],[],[1,2],[]]
                        Output: [4,4,1,3,2]
                        Explanation:
                        const sum = (a, b) => a + b;
                        const memoizedSum = memoize(sum);
                        memoizedSum(2, 2); // "call" - returns 4. sum() was called as (2, 2) was not seen before.
                        memoizedSum(2, 2); // "call" - returns 4. However sum() was not called because the same inputs were seen before.
                        // "getCallCount" - total call count: 1
                        memoizedSum(1, 2); // "call" - returns 3. sum() was called as (1, 2) was not seen before.
                        // "getCallCount" - total call count: 2
                        */
