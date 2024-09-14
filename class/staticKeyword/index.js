// static : keyword that defines properties or methods that 
//          belong to a class itself rather than the objects
//          created from that class(class owns anything static, 
//          not the objects.)



class Circle{
    static PI = 3.14;
    
    static getArea(radius)
    {
        let area = Math.pow(radius,2)* this.PI;
        console.log(`Area of circle of radius ${radius} is ${area}`);
    }

    static getCircumference(radius)
    {
        let circumference = radius*this.PI*2;
        console.log(`Circumfrence of circle of radius ${radius} is ${circumference.toFixed(2)}`)
    }
}

Circle.getArea(10);
Circle.getCircumference(10);


class User{
    static userCount = 0;

    

    constructor(username)
    {
        this.username = username;
        User.userCount++;
        this.display();
    }
    
    display()
    {
        console.log(`Total users: ${User.userCount}, current user: ${this.username}`);
    }

    

}

user1 = new User("spongeBob");
user2 = new User("Patrik");