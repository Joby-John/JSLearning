// //closures : function defined inside of another function,
//                 the inner function has access to the variables
//                 and scope of the outer function.
//                 Allow for private variables and state maintenance
//                 used frequently in JS frameworks: React, Vue, Angular 


//encapsulation

function outer()
{
    let message = "Hello";

    function inner()
    {
        console.log(message);
    }

    inner();
}

outer();


//state mainatanance and security

function createCounter()
{
    let count = 0;

    function increment()
    {
        count++;
        console.log(count);
    }

    function getCount()
    {
        return count;
    }

    return {increment, getCount};
}

const counter = createCounter();
for(let i = 0; i<10; i++)
{
    counter.increment();
}

console.log(counter.getCount());



function matchManager()
{
    let score = 0;

    function increaseScore(points)
    {
        score+=points;

        console.log(`+${points} pts`);
    }

    function decreaseScore(points)
    {
        score-= points;
        console.log(`-${points} pts`);
    }

    function getScore()
    {
        return score;
    }

    return {increaseScore, decreaseScore, getScore};
}

const umpire = matchManager();

score = 10000;
umpire.increaseScore(5);
umpire.increaseScore(6);
umpire.decreaseScore(3);
console.log(umpire.getScore());
