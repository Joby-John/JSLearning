

//step 1: create the element 
const newH1 = document.createElement("h1");


//step 2: add attributes and properties

newH1.textContent = "this is the heading";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";
//step 3: append element to DOM

// document.body.prepend(newH1);
// document.getElementById("box1").prepend(newH1);

const box2 = document.getElementById("box2");
document.body.insertBefore(newH1, box2);

//REMOVE HTML ELEMENT

document.body.removeChild(newH1);