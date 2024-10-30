/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
        
        return "Hello World";
        
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */

                /**
                OUTPUT
                Input: args = []
                Output: "Hello World"
                Explanation:
                const f = createHelloWorld();
                f(); // "Hello World"
                

                The function returned by createHelloWorld should always return "Hello World".


                */
