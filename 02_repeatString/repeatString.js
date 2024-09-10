const repeatString = function(string, num) {
    if (num < 1 && num >= 0) return '';
    if (num < 0) return 'ERROR';
    let str = string;
    for (let i = 1; i < num; i++) {
        string += str;
    };
    return string;
};

// Do not edit below this line
module.exports = repeatString;
