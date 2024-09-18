// JSON = (JavaScript Object Notation) data-interchange format
//         used for exchanging data between a server and a web application
//         JSON fie(key:value) or [{}, {}, {}]
        
//         JSON.stringify() : converts a JS object to a JSON string
//         JSON.parse(): converts a JSON string to a JS object

// const names = `["Sopngebob", "patrick", "Sqidward", "Sandy"]`
// const person = `{"name":"Spongebob", "age":"30", "isEmployed":true,
//                 "hobbies":["jellyfishing", "Karate", "Cooking"]}`
// const people = `[{"name":"Spongebob","age":"30","isEmployed":true},
//                 {"name":"Patrick","age":"34","isEmployed":false},
//                 {"name":"Squidward","age":"40","isEmployed":true},
//                 {"name":"Sandy","age":"27","isEmployed":false}]`


// const parsedData = JSON.parse(people);

// console.log(parsedData);


// async function fetchFiles()
// {
//     try{
//         const fileContent  = await fetch("people.json");
//         const people = await fileContent.json();
//         people.forEach(person => {
//             console.log(person.age);    
//         });

//     }
//     catch(error)
//     {
//         console.error(error);
//     }
// }

// fetchFiles();


fetch("people.json").then((resolve)=>resolve.json())
             .then(values => values.forEach(value=>console.log(value.name)))
             .catch((error)=>console.error(error));


