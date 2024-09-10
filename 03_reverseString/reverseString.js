const reverseString = function(string) {
    const arr = new Array();
    for (let i = 0; i < string.length; i++) {
        arr[string.length - i] = string[i];
        reverseArr = arr.join();
    };
    console.log(reverseArr);
    return reverseArr;
};

// Do not edit below this line
module.exports = reverseString;
