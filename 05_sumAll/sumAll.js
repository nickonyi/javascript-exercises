const sumAll = function() {
    const arr = [1, 4];
    let min = Math.min(arr[0], arr[1]);
    let max = Math.max(arr[0], arr[1]);
    let total = 0;

    for (i = min; i <= max; i++) {
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;