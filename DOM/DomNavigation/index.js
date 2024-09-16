// DOM navigation : the process of navigating through the structure
//                   of an html documnet using JavaScript.
                  
                  
                  
//     .firstElementChild
//     .lastElementChild
//     .nextElementSibling
//     .previousElementSibling
//     .parent Element
//     .children

const element  = document.getElementById("fruits");
const firstChild = element.firstElementChild;
const lastChild = element.lastElementChild;

const ulElements = document.querySelectorAll("ul");


// firstChild.style.backgroundColor = "Yellow"
// lastChild.style.backgroundColor = "Red"

ulElements.forEach(element => {
    element.firstElementChild.style.backgroundColor = "red";
});

 const apple = document.getElementById("apple");
 const fruits = document.getElementById("fruits");
 apple.nextElementSibling.style.backgroundColor = "orange";
 
 apple.parentElement.style.backgroundColor = "grey";

 fruits.nextElementSibling.style.backgroundColor = "Green"
 

 const desserts = document.getElementById("desserts").children;

 Array.from(desserts).forEach(dessert =>
 {
    dessert.style.color = "red";
 }
 );
 