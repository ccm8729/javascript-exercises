const removeFromArray = function(array, ...args) 
{
    const start = [];

    array.forEach((item) =>
    {
        if(!args.includes(item))
        {
        start.push(item);
        }
    })
    
    return start;
    };


// Do not edit below this line
module.exports = removeFromArray;
