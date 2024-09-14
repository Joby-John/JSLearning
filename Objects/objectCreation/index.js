// object = a collection of related propreties and/or methods
//          can represent real world objects(people, products, places)
//          object = {key:value,
//                     function()}

const person1 = {
    firstName : "Spongebob",
    secondName : "Sqaurepants",
    age : 30,
    isEmployed : false,
    sayHello : ()=>console.log(`Hi my name is ${person1.firstName}`),
    sayBye : function(){
        console.log(`This is bye from ${this.secondName}`)
    },
    amIWorking : (isEmployed)=>{
        if(isEmployed)
        {
            console.log("Yes I'm currently working at crusties");
        }
        else{
            console.log("The crab fired me");
        }
    }
};


console.log(person1.firstName);
console.log(person1.secondName);

person1.sayHello();
person1.sayBye();
person1.amIWorking(person1.isEmployed);