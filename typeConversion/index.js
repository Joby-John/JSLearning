//type conversion

// let age = window.prompt("How Old are you");//receives as string
// age+=1;//this append to string
// console.log(`age type of:${typeof(age)}`);
// age = Number(age);
// console.log(`age type of:${typeof(age)}`);

//for any string rather than empty it will always return true for Boolean conversion
//for any string of numerical value converting to number gives number.
//for any unallocated variable or any string other than numbers will give NaN(not a number) on conversion to Number.

const PI = 3.14;

let radius;
let circumference;

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("radius").value;
    radius = Number(radius);
    circumference = 2*PI*radius;

    document.getElementById("result").textContent = `Circumference is ${circumference} cm`;
}