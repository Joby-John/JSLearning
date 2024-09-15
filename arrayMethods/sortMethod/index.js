// sort() : sort method is used to sort elements of an array in place.
//          Sorts element as strings in lexicographical ondragover, not alphabetical
//          lexicographical = (alphabet + numbers+symbols) as strings

let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];

fruits.sort();
console.log(fruits);

let numbers = [2,1,4,5,8,7,6, 10, 9];
numbers.sort(
    (a,b) => a-b
);
console.log(numbers)

numbers.sort(
    (a,b) => b-a
);
console.log(numbers)


const people = [{name:"Spongebob", age:30, gpa:3.5},
                {name:"Patrik", age:34, gpa:2.5},
                {name:"Squidward", age:45, gpa:3.0},
                {name:"Sandy", age:20, gpa:4.0}
            ];

people.sort(
 (a, b)=>a.age-b.age
);

console.log(people);

people.sort(
    (a,b)=>a.name.localeCompare(b.name)
);

console.log(people);