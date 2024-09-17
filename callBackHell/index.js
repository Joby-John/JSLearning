// Callback Hell : Situation in javascript where callbacks
//                  are nested within other callbacks to the 
//                  degree where the code is difficult to read
//                  * old pattern to old asynchronous functions
//                  *use promises + async/await to avoid callback hell


function task1(callback)
{
    setTimeout(()=>
    {
        console.log("task 1 complete");
        callback();
    },1000);
}
function task2(callback)
{
    setTimeout(()=>
    {
        console.log("task 2 complete");
        callback();
    },4000);
}
function task3(callback)
{
    setTimeout(()=>
    {
        console.log("task 3 complete");
        callback();
    },1000);
}
function task4(callback)
{
    setTimeout(()=>
    {
        console.log("task 4 complete");
        callback();
    },1000);
}

// task1(()=>{
//     task2(()=>{
//         task3(()=>{
//             task4(()=>console.log("All tasks Finished"));
//         })
//     })
// });

task1(
    function()
    {
        task2(
            function ()
            {
                task3(
                    function()
                    {
                        task4(
                            function()
                            {
                                console.log("all Tasks finished")
                            }
                        );
                    }
                ); 
            }
        );
    }
);
