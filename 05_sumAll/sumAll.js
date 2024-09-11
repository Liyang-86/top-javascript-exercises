const sumAll = function(num1, num2) {
    if (num1 > 0 && num2 > 0 && Number.isInteger(num1) && Number.isInteger(num2)) {
        largeNum = Math.max(num1, num2);
        smallNum = Math.min(num1, num2);
        return sum = (largeNum - smallNum + 1) * (largeNum + smallNum) / 2;
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
