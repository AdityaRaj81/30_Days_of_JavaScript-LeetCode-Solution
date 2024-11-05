/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
function argumentsLength(...args) {
  return args.length;
}

/**
 * argumentsLength(1, 2, 3); // 3
 */

                    /**
                    OUTPUT
                    Input: args = [5]
                    Output: 1
                    Explanation:
                    argumentsLength(5); // 1
                    
                    One value was passed to the function so it should return 1.
                    */
