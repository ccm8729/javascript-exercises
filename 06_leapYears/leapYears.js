const leapYears = function(year) {

//let year = 1996;
let testYear = year;
let four = testYear / 4;
let fourHund = testYear / 400;
let hundred = testYear / 100;

console.log("year: " + year); 
console.log("test Year: " + testYear);
console.log(four);


let fourCheck = Number.isInteger(four);
let fourHundCheck = Number.isInteger(fourHund);
let hundredCheck = Number.isInteger(hundred);

console.log("fourCheck = " + four);
console.log(fourCheck);


if (hundredCheck === true && !fourHundCheck === true)
{
    return false;
}
else if (fourCheck === true || fourHundCheck === true)
{
    return true;
}
else
{
    return false;
}

};

//leapYears();

// Do not edit below this line
module.exports = leapYears;


//&& fourHundCheck === "true" && hundredCheck === "true"