// 2631. Group By

/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    const obj = {}
    for(const element of this){
        let key = fn(element)
        obj[key] ??= []
        obj[key].push(element)
    }
    return obj
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */