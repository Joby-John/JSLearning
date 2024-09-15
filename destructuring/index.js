// destructuring : extract values from arrays and objects,
//                 then assign them to variables in a convinient Way.
//                 [] = to perform array destructuring
//                 {} = to perform object destructuring


//example 1
let a = 1;
let b = 4;
[a, b] = [b, a];
console.log(a,b);

//example 2
const colors = ["red", "Blue", "Violet", "Black"];
[colors[0], colors[3]] = [colors[3], colors[0]];
console.log(colors);
colors.push("skyBlue", "Green")

//example 3

const [firstColor, secondColor, thirdColor, fourthColor, ...extraColors] = colors;
console.log(firstColor, secondColor, thirdColor, fourthColor);
console.log(extraColors);

//Extract values from objects 

const Person1 = {
    firstName :"Spongebob",
    lastName : "Squarepants",
    job: "Fry Cook",
    age: 30

}
const Person2 = {
    firstName :"Patric",
    lastName : "Star",
    age: 32

}

// const {firstName,lastName, age, job} = Person1;
// console.log(firstName,lastName, age, job);

const {firstName,lastName, age, job} = Person2;
console.log(firstName,lastName, age, job);


//Destructure in function parameters

function display({firstName, lastName, age, job = "Unemployed"})  
{
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

display(Person1);
display(Person2);
