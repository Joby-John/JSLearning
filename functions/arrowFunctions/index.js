// arrow functions: a concise way to write function expressions
//                  good for simple functions that you use only once

//                  syntax: (parameters) => some code


const numbers = [1,2,3,4,5];

function hello ()
{
    console.log("Hello this is regular definition");
}

const helloUsingExpression = function()
{
    console.log("Hello, this is function expression");
}

const helloUsingArrow = (name) => {
    console.log(`Hello ${name} using arrow functions`);
}

const threeSecondsPassed = () =>{
    console.log("3 seconds passed");
    console.log(`Even numbers: ${even}`);
    console.log(`Odd numbers: ${odd}`);
    console.log(`Sum: ${total}`);
}

const even = numbers.filter((elements) => elements%2===0);
const odd = numbers.filter((elements) => elements%2!==0);
const total = numbers.reduce((sum,element) => sum+element);

hello();
helloUsingExpression();
helloUsingArrow("Joby");


setTimeout(threeSecondsPassed, 3000);