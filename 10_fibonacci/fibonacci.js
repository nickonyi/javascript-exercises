const fibonacci = function(number) {
    // Get the input from the user.
    const num = 100;
    // Declare the variables.
    let n1 = 0;
    let n2 = 1;
    let nextNum;
    const array = [];
    // create a for loop where in every iteration the next number is going to be addition of the previous two numbers and change the value of the previous number to the next number.
    for (i = 0; i <= num; i++) {

        array[i] = n1;
        nextNum = n1 + n2;
        n1 = n2;

        n2 = nextNum;

    }



    if (number >= 0) {
        return array[number];
    } else {
        return "OOPS";
    }


    // output our results.
};

// Do not edit below this line
module.exports = fibonacci;