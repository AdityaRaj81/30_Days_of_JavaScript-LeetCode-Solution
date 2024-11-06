        /**

     * @param {Function} fn

     * @return {Function}

     */

    var once = function (fn) {



        let hasBeenCalled = false; // Initialize a flag to track whether fn has been called



        return function (...args) {

            if (!hasBeenCalled) {

                // If fn has not been called before

                hasBeenCalled = true; // Set the flag to true to indicate that fn has been called

                return fn(...args); // Call fn with the provided arguments and return its result

            } else {

                // If fn has already been called

                return undefined; // Return undefined as specified

            }

        };

    };



    /**

     * let fn = (a,b,c) => (a + b + c)

     * let onceFn = once(fn)

     *

     * onceFn(1,2,3); // 6

     * onceFn(2,3,6); // returns undefined without calling fn

     */


                                /**
                                OUTPUT
                                Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
                                Output: [{"calls":1,"value":6}]
                                Explanation:
                                const onceFn = once(fn);
                                onceFn(1, 2, 3); // 6
                                onceFn(2, 3, 6); // undefined, fn was not called
                                */
