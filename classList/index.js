// classList = Element property in JavaScript used to interact
//              with an element's list of classes (CSS classes)
//              Allows you to make reusable classes for many elements
//              across you webpage.

//  add()
//  remove()
//  toggle(Remove if present, Add if not)
//  replace(oldClass, newClass)
//  contains()


const myButton = document.getElementById("myButton");

myButton.classList.add("enabled");


// myButton.addEventListener("mouseover", (event)=>
// {
//     event.target.classList.add("hover");
// }
// );

// myButton.addEventListener("mouseout", (event)=>
//     {
//         event.target.classList.remove("hover");
//     }
//     );

// myButton.addEventListener("mouseover", (event)=>
//     {
//         event.target.classList.toggle("hover");
//     }
//     );


myButton.addEventListener("click" ,(event)=>
{
    if(event.target.classList.contains("enabled"))
    {
        event.target.classList.replace("enabled", "disabled");
        event.target.textContent = "Disabled 😡"
    }
    else
    {
        event.target.classList.replace("disabled", "enabled");
    }
}
);


