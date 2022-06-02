const objs = [];

const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const sum = function(objs) {
    const sumTotal = objs.reduce((total, obj) => {
        return total + obj;
    }, 0);

    return sumTotal;
};

const multiply = function(objs) {
    const multiple = objs.reduce((prevValue, currentValue) => {
        return prevValue * currentValue;
    }, 1);
    return multiple;
};

const power = function(a, b) {
    return a ** b;
};

const factorial = function(n) {
    let answer = 1;
    if (n === 0 || n === 1) {
        return answer;
    } else {
        for (i = n; i >= 1; i--) {
            answer *= i;
        }
        return answer;
    }
};


//Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
};