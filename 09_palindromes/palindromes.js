const palindromes = function (str) {
    str = str.replace(/[^\w\']/g, "").toLowerCase().split('');
    console.log(str);
    for (let i = 0; i <= str.length - i; i++) {
        if (str[i] != str[str.length - i - 1]) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
