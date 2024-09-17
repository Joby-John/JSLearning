// Async/Await : Async: makes a function return a promise 
//                Await: makes async function wait for a promise
               
//                Allows you to write Asynchronous code in a synchronous manner
//                Async doesn't have resolve or reject parameters
//                Evevrything after Await is placed in an event queue



function walkDog()
{
    return new Promise((resolve, reject)=>
    {
        const walked = true;
        setTimeout(()=>{
            if(walked)
            {
                resolve("You walked the dog");
            }
            else
            {
                reject("You haven't walked the dog");
            }
        }, 2500);
    });
}

function cleanKitchen()
{
    return new Promise((resolve, reject)=>
    {
        const cleaned = false;
        setTimeout(()=>{
            if(cleaned)
            {
                resolve("You cleaned the kitchen");
            }
            else
            {
                reject("You haven't cleaned the kitchen");
            }
        }, 3000);
    });
}

function takeTrash()
{
    return new Promise((resolve, reject)=>
    {
        const trash = true;
        setTimeout(()=>{
            if(trash)
            {
                resolve("You took out the trash");
            }
            else
            {
                reject("You haven't took out the trash");
            }
        }, 500);
    });
}


async function doChores()
{
   try
   {
    const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const cleanKitchenresult = await cleanKitchen();
    console.log(cleanKitchenresult);

    const takeTrashResult = await takeTrash();
    console.log(takeTrashResult);

    console.log("All tasks done succesfully");
   }
   catch(error)
   {
    console.error(error);
    console.error("Tasks to complete remains");
   }
}

doChores();