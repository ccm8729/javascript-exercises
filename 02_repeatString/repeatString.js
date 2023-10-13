const repeatString = function(word, times) 
{
let string =""
if( times < 0)
{
    string = 'ERROR'
    return string;
    
}
else{

for (let i = 0; i < times; i++)
{

    string = word+string;
}

return string;

}
};

// Do not edit below this line
module.exports = repeatString;

/*
const repeatString = function (word, times) {
    if (times < 0) return "ERROR";
    let string = "";
    for (let i = 0; i < times; i++) {
      string += word;
    }
    return string;
  };
  
  module.exports = repeatString;*/

