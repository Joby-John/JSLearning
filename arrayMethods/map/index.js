//.map() : accepts a callback and applies that function to each
//          Element of an array, then return a new array


const numbers = [1,2,3,4,5];

const squares = numbers.map(square);
const cubes = numbers.map(cube);

console.log(cubes);
console.log(numbers);

function square(element)
{
    return Math.pow(element, 2);
}

function cube(element)
{
    return Math.pow(element, 3);
}


const dates = ["2024-1-10", "2025-2-20", "2026-3-30"]

const formattedDates = dates.map(formatDates);


function formatDates(element)
{
    let parts = element.split("-");

    return(`${parts[2]}-${parts[1]}-${parts[0]}`);

}

console.log(formattedDates);