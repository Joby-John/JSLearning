const fruits = [
                {name:"Apple", color:"red",calories:95},
                {name:"Orange", color:"Orange",calories:45},
                {name:"Banana", color:"yellow",calories:105},
                {name:"Coconut", color:"White",calories:159},
                
                ]
fruits.push({name:"pineapple", color:"yellow",calories:37});
console.log(fruits[0].name);

fruits.forEach(
    fruit => console.log(fruit));

fruits.pop();

fruits.forEach(
    fruit => console.log(fruit));

fruits.splice(0,1);

console.log("After splice");
fruits.forEach(
    fruit => console.log(fruit.name));


const fruitNames = fruits.map(
    fruit => fruit.name
);

const fruitColors = fruits.map(
    fruit => fruit.color
);

const yellowFruits = fruits.filter(
    fruit=>fruit.color==="yellow"
);

const lowClorieFruits = fruits.filter(
    fruit => fruit.calories<100
);

const maxFruit = fruits.reduce(
    (max, fruit) => fruit.calories>max.calories?fruit:max
);
const minFruit = fruits.reduce(
    (min, fruit) => fruit.calories<min.calories?fruit:min
);


console.log(fruitNames);
console.log(yellowFruits);
console.log(lowClorieFruits);

console.log(maxFruit);
console.log(minFruit);