//easy way

let userName;
userName = window.prompt("Enter your name");
console.log(userName);



//teh right way
let username;

document.getElementById("submitButton").onclick = function()
{
    username  = document.getElementById("myText").value;

    document.getElementById("firstH1").textContent = `Welcome ${username}`;
}
