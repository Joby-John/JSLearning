
const roll = document.getElementById("roll");
const result1 = document.getElementById("result1");
const result2 = document.getElementById("result2");
const result3 = document.getElementById("result3");

const min = 1;
const max = 6;
let side = 0;

roll.onclick = function(){
    side = Math.floor(Math.random()*max)+min;
    result1.textContent = side;
    side = Math.floor(Math.random()*max)+min;
    result2.textContent = side;
    side = Math.floor(Math.random()*max)+min;
    result3.textContent = side;
}
