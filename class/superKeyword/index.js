// super = keyword is used in class to call the constructor or acces the 
//            properties and methods of a parent (super class)
//            this = this Object
//            super = the parent


class Animal{
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }

    print(speed)
    {
        console.log(`${this.name}, ${this.age} years old can move at ${speed}`);
    }
}

class Rabbit extends Animal{
    constructor(name, age, runSpeed)
    {
        super(name, age);
        
        this.runSpeed = runSpeed;
        super.print(runSpeed);
    }
}

class Fish extends Animal{
    constructor(name, age, swimSpeed)
    {
        super(name, age);
        
        this.swimSpeed = swimSpeed;

        super.print(swimSpeed);
    }
}

class Hawk extends Animal{
    constructor(name, age, flySpeed)
    {
        super(name, age);
        
        this.runSpeed = flySpeed;
        super.print(flySpeed);
    }
}

const rabbit = new Rabbit("rabbit", 3, "34kmph");
const fish  = new Fish("Fish", 12, "30kmph");
const hawk =  new  Hawk("hawk", 8, "60kmph");