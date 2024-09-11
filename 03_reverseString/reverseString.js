const reverseString = function(string) {
    const arr = [];
    for (let i = 0; i < string.length; i++) {
        arr[string.length - i - 1] = string[i];
    };
    reverseArr = arr.join('');
    return reverseArr;
};

// Do not edit below this line
module.exports = reverseString;
