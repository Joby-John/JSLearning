// synchronous : executes line by line consecutively in a sequential manner
//               code that waits for an operation to complete

// asynchronous : Allows multiple operations to performed concurrently without
//                 without waiting 
//                 doesn't block the execution flow and allows the program to continue
//                 (I/O operations, newtork requests, fetching data)
//                 handled with : callbacks, promises, Async/Await              



//synchronous code

console.log("task 1");
console.log("task 2");
console.log("task 3");

//asynchronous
//callback

function func1(callback)
{
    setTimeout(
        ()=>{
            console.log("callback Task 1");

        callback()}, 3000);
}

function func2()
{
    console.log("callback Initiated");
    console.log("task 1");
    console.log("task 2");
    console.log("task 3");
}


func1(func2);
