const removeFromArray = function() {
    const numbers = [1, 2, 3, 4];
    const removeArray = numbers.splice(2, 1);

    return numbers;
};

// Do not edit below this line
module.exports = removeFromArray;