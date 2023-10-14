const sumAll = function(min, max) {
   //let min = 4;
   //let max = "90";
    let low = min;
    let high = max;
    let sum = 0;

    console.log("max: " + max);
if(!Number.isInteger(min)||!Number.isInteger(max))
{
    let message = 'ERROR';
    return message;
}
else if((min*max)>0)
{
    
    if(min>max)
    {
        high = min;
        low = max;
    }
    console.log("Min: " + low);
    console.log("max : " + high);

    let next = low;
    let dif = high-low + 1;
    console.log("dif: " + dif);


    
    for (i = 0; i<dif; i++)
    {
       sum = sum + next; 
       next = next+1;

    }

console.log("final sum: " + sum);

return sum;

}
else
{
    let message = 'ERROR';
    return message;

}
}




//sumAll();
// Do not edit below this line
module.exports = sumAll;
