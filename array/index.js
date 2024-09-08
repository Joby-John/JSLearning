let fruits = ["apple", "orange", "banana"];
console.log(fruits);

//push
fruits.push("coconut");
console.log(fruits);
//pop
console.log(fruits.pop());
console.log(fruits);
//unshift
fruits.unshift("mango");
console.log(fruits[0]);
//shift
fruits.shift();
console.log(fruits);
//length
console.log(fruits.length);

// for(let i = 0; i<fruits.length; i++)
// {
//     console.log(fruits[i]);
// }

// for(let fruit of fruits)
// {
//     console.log(fruit);
// }

//spread operator

// let firstName = "Joby";
// let lastName = "John";
// let fullName = ["Mr",...firstName, ...lastName];
// console.log(fullName);

// console.log([...fullName].join("-"));

// function openFridge(...foods)
// {
//     console.log(...foods);
// }

// function viewFood(...foods)
// {
//     console.log(foods);
// }

// let food1 = "pizza";
// let food2 = "caviar";
// let food3 = "milk shake";
// let food4 = "sushi";

// openFridge(food1, food2, food3, food4);
// viewFood(food1, food2, food3, food4);


function sum(...numbers)
{
    let result = 0;
    for(number of numbers)
    {
        result += number;
    }
    console.log(result);
}

function average(...numbers)
{
    let result = 0;
    let count = 0;
    for(number of numbers)
    {
        result += number;
        count++;
    }
    console.log(result/count);
}

function combineStrings(...strings)
{
    return strings.join(" ");
}

average(1,2,3,4);
sum(1,2,3,4);

let combinedString = combineStrings("Iron", "Man", "IV");

console.log(combinedString);