// Promise : An objects that manages asynchronous operations.
//            wrap a Promise Object around {asynchronuous code}
//            "i Promise to return a value" 
//            PENDING -> RESOLVED or REJECTED
//            new Promise((resolve, reject) => {asynchronous code})
           
           
//            Do these in order
//            1. WALK THE DOG
//            2. CLEAN THE KITCHEN
//            3. TAKE OUT THE TRASH




function walkDog()
{
    return new Promise((resolve, reject) =>{
        const walked = true;
        setTimeout(()=>
        {
            if(walked)
            {
                resolve("You walked the dog");
            }
            else
            {
                reject("You failed to walk the dog");
            }
        }, 2500)
    });
}

function cleanKitchen()
{
    return new Promise((resolve, reject)=>{
        const cleaned = true;
        setTimeout(()=>{
            if(cleaned)
            {
                resolve("You cleaned the kitchen");
            }
            else
            {
                reject("You failed to clean the kitchen");
            }
        }, 3000); 
    });
}

function takeTrash()
{
    return new Promise((resolve, reject)=>{
        const trash = false;
        setTimeout(()=>{
            if(trash)
            {
                resolve("You took out the trash");
            }
            else
            {
                reject("You failed to take out the trash");
            }
        }, 500);
    });
};


walkDog().then((value)=>{console.log(value); return cleanKitchen()})
         .then((value)=>{console.log(value); return takeTrash()})
         .then((value)=>{console.log(value); console.log("All tasks finished")})
         .catch((error)=>{console.error(error); console.error("jobs to complete still remains")});