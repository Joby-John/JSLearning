
let username = "  Joby";

let phone = "123-457-789";
console.log(username.length);
username = username.trim();

console.log(username.length);

console.log(username);
console.log(username.charAt(1));
console.log(username.indexOf("o"));
console.log(username.toUpperCase());
console.log(username.repeat(3));
console.log(username.startsWith("J"));
console.log(username.endsWith("J"));
console.log(username.includes(" "));

console.log(phone.replaceAll("-", "/"));

console.log(phone.padStart(15,"j"));
console.log(phone.padEnd(15,0));

//string slicing

const fullName = "Joby John";
let splitIndex = fullName.indexOf(" "); 
let firstName = fullName.slice(0,splitIndex);
let lastName = fullName.slice(splitIndex+1);
//js also support negative index
console.log(firstName);
console.log(lastName);

const email = "joSample@gmail.com";
username = email.slice(0,email.indexOf("@"));
let extension = email.slice(email.indexOf("@")+1, email.indexOf("."));

console.log(username);
console.log(extension);



