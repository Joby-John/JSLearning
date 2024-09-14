// .reduce :- used to reduce the elements of an array 
//              into single element  


const prices = [5, 30, 50, 60 , 73];

const total = prices.reduce(sum);
const max = prices.reduce(getMax);

function sum(prevSum, currElement)
{
    return prevSum+currElement;
}

function getMax(accumulator, element)
{
    return(Math.max(accumulator, element));
}

console.log(`Rs ${total.toFixed(2)}`);
console.log(`maximum price is ${max}`);

