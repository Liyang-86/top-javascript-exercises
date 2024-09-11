const removeFromArray = function(arr, ...nums) {
    for (const i of nums) {
        arr = arr.filter((x) => {
            return x !== i;
        });
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
