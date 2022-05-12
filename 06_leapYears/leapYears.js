const leapYears = function() {
    let leapYear = 2000;

    if (leapYear % 4 === 0) {
        return true;
    } else if (leapYear % 100 === 0 && leapYear % 400 === 0) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;