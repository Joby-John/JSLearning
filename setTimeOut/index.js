// // setTimeout() : function in javascript that allows you to shedule the execution 
// //                 of a function after an amount of Time ( milliseconds)
// //                 times are approximate(varies based on the workload o f the javascript runtime Env.)

// //                  setTimeouut(callback, delay)

// //we can also cancel a timeout  before it triggers using clear time out 
// // in which we have to pass the tim out id we want to cancel



// //regular function
// function sayHello()
// {
//     window.alert("Hello");
// }

// const regular = setTimeout(sayHello, 3000);
// clearTimeout(regular);


// //anonymous function
// const anonymous = setTimeout(
//     function(){
//     window.alert("Hello from anonymous fuction");
// }, 6000
// )

// //arrow function
// const arrow = setTimeout(()=>{
//     window.alert("Hello from arrow function")},7000
// );

class timer{

    constructor()
    {
        this.timeOutId;
    }
    startTimer()
    {
        this.timeOutId = setTimeout( function(){
            window.alert("Hi");
        }, 3000);
    }
    stopTimer()
    {
        console.log("cleared");
        clearTimeout(this.timeOutId);
    }
}

const myTimer = new timer();

