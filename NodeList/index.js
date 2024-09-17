// NodeList : static collection of HTML element by (id, class, element)
//             can be created by using querySelectorAll()
//             Similar to an array, but no (map, filter, reduce)
//             NodeList won't update to automatically reflect chnages


let buttons = document.querySelectorAll(".myButtons");



const newButton = document.createElement("button");
newButton.textContent = "Button 5";
newButton.className = "myButtons";

document.body.appendChild(newButton);

buttons = document.querySelectorAll(".myButtons");

console.log(buttons);

buttons.forEach( (button) =>
    {
        button.addEventListener("click", (event)=>
        {
            event.target.remove();
            buttons = document.querySelectorAll(".myButtons");
            console.log(buttons);
        })
    }
)