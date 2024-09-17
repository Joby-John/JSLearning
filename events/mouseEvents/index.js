// eventListener : listen for specific events to create interactive webpages
//                  events: click, mouseover, mouseout
//                  .addEventListener(event, callback);


const myBox = document.getElementById("myBox");

myBox.addEventListener("click", (event)=>
{
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "Ouch😥"
});

myBox.addEventListener("mouseover", (event)=>
{
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't do it 😟"
})
myBox.addEventListener("mouseout", (event)=>
    {
        event.target.style.backgroundColor = "lightgreen";
        event.target.textContent = "Click me 😊"
    })
