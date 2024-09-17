// eventListener  = Listen for specific events to create intreactive web pages
// events: keydown, keyup
// document.addEventListener(event, callback);

// document.addEventListener("keydown", (event)=>
// {
//     console.log(`key down = ${event.key}`);
// });

// document.addEventListener("keyup", (event)=>
// {
//     console.log(`key up = ${event.key}`);
// });

const myBox = document.getElementById("myBox");
const moveDistance = 10;
let x = 0;
let y = 0;
document.addEventListener("keydown", (event)=>
{
    myBox.textContent = "😲"
    myBox.style.backgroundColor = "tomato";

});
document.addEventListener("keyup", (event)=>
    {
        myBox.textContent = "😊"
        myBox.style.backgroundColor = "lightBlue";
    
    });

document.addEventListener("keydown", (event)=>
    {
        if(event.key.startsWith("Arrow"))
        {
            event.preventDefault();
            switch(event.key)
            {
                case "ArrowUp":
                    y-=moveDistance;
                    break;
                case "ArrowDown":
                    y+=moveDistance;
                    break;
                case "ArrowLeft":
                    x-=moveDistance;
                    break;
                case "ArrowRight":
                    x+=moveDistance;
                    break;
            }

            myBox.style.top = `${y}px`;
            myBox.style.left = `${x}px`;
        }
    
    });

