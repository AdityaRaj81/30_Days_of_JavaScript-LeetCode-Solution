           /**

     * @param {number[]} arr

     * @param {Function} fn

     * @return {number[]}

     */

    var filter = function (arr, fn) {



        filteredArr = []

        for (let i = 0; i < arr.length; i++) {

            if (fn(arr[i], i)) {

                filteredArr.push(arr[i])

            }

        }

        return filteredArr



    };





                      /**
                      OUTPUT
                      Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
                      Output: [1]
                      Explanation:
                      fn can also accept the index of each element
                      In this case, the function removes elements not at index 0
                      */
