const palindromes = function(string) {
    const re = /[^A-Za-z0-9]/g;

    let lowRegStr = string.toLowerCase().replace(re, "");
    let reverseStr = lowRegStr.split('').reverse().join('');

    return reverseStr === lowRegStr;
};

// Do not edit below this line
//change
module.exports = palindromes;