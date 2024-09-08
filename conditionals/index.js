

const h1 = document.getElementById("h1");
const button = document.getElementById("button");

button.onclick = function()
{
    //getElementByClassName returns collection to access specific value, access by index
    let ageInput = document.getElementsByClassName("text")[0];//[0] for first element bc i got it by classname
    age = Number(ageInput.value);

    if(age<18)
    {
        h1.textContent = "You are not old enough to enter this site";
    }
    else if(age>100)
    {
        h1.textContent = "You are  too old to enter this site";
    }
    else{
        h1.textContent = "You are  old to enter this site";
    }
    ageInput.value = "";
}

