const ftoc = function() {
    let farenheight = 32;

    let fartocel = (farenheight - 32) * 5 / 9;

    return fartocel;
};

const ctof = function() {
    let celcious = 0;
    let celtofar = (celcious) * 9 / 5 + 32;
    return celtofar;
};

// Do not edit below this line
module.exports = {
    ftoc,
    ctof
};