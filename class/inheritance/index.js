
// inheritance = allows a new class to inherit properties and methods
//               from an existing class(parent -> child)
//               also helps with code reusability


class Animal
{
    eat(){
        this.display(`${this.name} is alive`);
    }
    sleep()
    {
        this.display(`${this.name} is sleeping`);
    }

    display(toPrint)
    {
        console.log(toPrint);
    }
}

class Rabbit extends Animal{
    name = "rabbit";
    hop()
    {
        console.log("rabbit hops");
    }
}
class Lion extends Animal{
    name = "Lion";
    run()
    {
        console.log("lion runs");
    }
}

const rabbit = new Rabbit();
const lion = new Lion();
lion.sleep();
lion.eat();
lion.run();

rabbit.eat();
rabbit.sleep();
rabbit.hop();