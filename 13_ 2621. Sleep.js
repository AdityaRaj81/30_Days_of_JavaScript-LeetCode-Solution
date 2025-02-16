/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    
    return new Promise(r => setTimeout(r, millis));
    
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

        /**
        OutPut
          Input: millis = 200
          Output: 200
          Explanation: It should return a promise that resolves after 200ms.
          */
