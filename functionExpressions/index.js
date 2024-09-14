// function expressions : a way to define functions as
//                         values or variables


//can assign function to variable and call
const hello = function()
{
    console.log("Hello using variable");
}

setTimeout(hello, 3000);


//can include whole function as parameter
setTimeout(function()
{
    console.log("Hello inside the fuction");
}, 4000);


const numbers = [1,2,3,4,5,6,7];

const squares = numbers.map(
    function(element)
    {
        return Math.pow(element, 2);
    }
);

const cubes = numbers.map(
    function(element){
        return Math.pow(element, 3);
    }
)

const even = numbers.filter(
    function(element)
    {
        return element%2 === 0;
    }
)

console.log(squares);
console.log(cubes);
console.log(even);

