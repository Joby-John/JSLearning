
let loggedIn = false;
let username;

username = window.prompt("Enter your username");


// while(!loggedIn)
// {
    
//     let password = window.prompt("Enter your password");

//     if(username === "myUsername" && password ==="pass")
//     {
//         loggedIn = true;
//         console.log("Logged In");
//     }
//     else
//     {
//         console.log("Invalid");
//     }
// }

for(let i = 0;i<10; i++)
{
    window.alert(`${i}`);
}
username = username.trim().charAt(0).toUpperCase()+ username.trim().slice(1).toLowerCase();

console.log(username);

console.log(1==1);
console.log(1=="1");

console.log(1===1);
console.log(1==="1");

console.log(1!="1");
console.log(1!=="1");


