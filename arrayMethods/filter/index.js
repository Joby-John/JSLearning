const number = [1,2,3,4,5,6,7];

let even = number.filter(pickEven);
let odd = number.filter(pickOdd);

function pickEven(element)
{
    return element%2 === 0;
}

function pickOdd(element)
{
    return element%2 !== 0;   
}

console.log(even);
console.log(odd);