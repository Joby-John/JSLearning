// DOM : DOCUMENT OBJECT MODEL
//       object{} that represents th epage you see in the web browser
//       an dprovides you with a API to interact with it.
//       Web browser constructs the DOM when it loads an html document,
//       and structures all the elements in a tree-like representation.
//       JavaScript can access the DOM to dynamically change the content
//       , structure, and style of a web page. 

document.title = "Changed Title"
document.body.style.backgroundColor = "hsl(0,0%,15%)";


const userName = "Joby";
const welcomeMSG = document.getElementById("welcomeMSG");

welcomeMSG.textContent += userName===""?`Guest`:userName;
