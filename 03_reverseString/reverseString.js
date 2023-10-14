const reverseString = function(string) {
let forward = string; 
let len = string.length

const reverse = Array.from(forward).reverse().join("");

return reverse;


};

// Do not edit below this line
module.exports = reverseString;
