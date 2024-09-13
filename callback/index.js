

hello(goodbye);


function hello(callback)
{  
    setTimeout(function()//for delay
    {
        console.log("Hello");
        callback(leave);
    }, 3000);

    
}
function goodbye(callback)
{
    console.log("goodBye");
    callback();
}

function leave()
{
    console.log("Wait");
}

const h1Result = document.getElementById("result");
sum(display, 1, 2);

function display(result)
{
    h1Result.textContent = result;
}

function sum(callback, x, y)
{
    let result = x+y;
    callback(result);
}