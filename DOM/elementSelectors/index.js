// element selectors : methods used to target and manipulate html elements
//                      they allow you to select one or multiple HTML elemnets
//                      from the DOM(Document Object Model)

// 1. document.getElementById()        //Element or NULL
//  2. document.getElementByClassName() //HTML COLLECTION
//  3. document.getElementByTagName()   //HTML COLLECTION
//  4. document.querySelector()         //ELEMENT OR NULL
//  5. document.querySelectorAll()      //NODELIST



const myHeading = document.getElementById("h1");
const fruits = document.getElementsByClassName("fruits");
const h4 = document.getElementsByTagName("h4");
const li = document.getElementsByTagName("li");
const ul = document.getElementsByTagName("ul");
const element  = document.querySelector("li");//selects first found element of that type
const allFruits = document.querySelectorAll(".fruits");//returns same like class name but is static and dont update live like class selector


allFruits.forEach( fruit =>
    {
        fruit.style.fontSize = "2em";
        fruit.style.display = "inline-block";
    }
)




console.log(allFruits);

for (let fruit of fruits)
{
    fruit.style.backgroundColor = "yellow";
}

Array.from(fruits).forEach(fruit => //to use for each we need to type cast html collection to array
{
    fruit.style.backgroundColor = "red";
}
)



myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";



for (let element of h4)
{
    element.style.backgroundColor  = "Yellow";
}

for(let element of li)
{
    element.style.color = "lightGreen"
}

Array.from(ul).forEach(element => {
    element.style.backgroundColor = "grey";
})


const body = document.getElementsByTagName("body");
body[0].style.backgroundColor = "white";
function flipMode()
{
    if(body[0].style.backgroundColor ==="white")
    {
        body[0].style.backgroundColor = "black";
        document.getElementById("mode").textContent = "Light Mode";   
    }
    else
    {
        body[0].style.backgroundColor = "white";
        
        document.getElementById("mode").textContent = "Dark Mode";
    }
}
flipMode();




