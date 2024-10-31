/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let currentValue = init;

    return {
        increment: function() {
            return ++currentValue;
        },
        decrement: function() {
            return --currentValue;
        },
        reset: function() {
            currentValue = init;
            return currentValue;
        }
    };
};

/**
 * Example usage:
 * const counter = createCounter(5)
 * console.log(counter.increment()); // 6
 * console.log(counter.reset()); // 5
 * console.log(counter.decrement()); // 4
 */

            /**
            OUTPUT
            Input: init = 5, calls = ["increment","reset","decrement"]
            Output: [6,5,4]
            Explanation:
            const counter = createCounter(5);
            counter.increment(); // 6
            counter.reset(); // 5
            counter.decrement(); // 4
            */
