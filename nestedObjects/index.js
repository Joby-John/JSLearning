// // nested objects  = objects inside of other objects. 
// //                   allows you to respresent more complex data structures
// //                   child object is enclosed by a parent object 

// //                   Person{Address{}, ConstactInfo{}}
// //                   ShoppingCart{Keyboard{}, mouse{}, Monitor{}}

// const person = {
//     fullName : "Spongebob Squarepants",
//     age : 30,
//     isStudent : true,
//     hobbies:["karate", "Jelly fishing", "Cooking"],
//     Address:{
//         street: "124 Conch St",
//         city: "Bikini Bottom",
//         country: "Int.Waters"
//     } 
// }

// console.log(person.fullName);
// console.log(person.age);
// console.log(person.isStudent);
// console.log(person.hobbies);
// console.log(person.Address.street, person.Address.city, person.Address.country );

class Person{
    constructor(name, age, ...address)//compresses it into an array
    {
        this.name = name;
        this.age = age;
        this.address = new Address(...address);//decompreses for passing
    }
}

class Address{
    constructor(street, city, country)
    {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Spongebob", 30, "124 Conch St.",
                            "bikini botton", "Int. waters");

const person2 = new Person("Patrik Star", 34, "124 Conch St.",
                                "bikini botton", "Int. waters");
const person3 = new Person("Squidward", 45, "126 Conch St.",
                                    "bikini botton", "Int. waters")

console.log(person3.address.street);
console.log(person1.address.city);
console.log(person2.address.country);
