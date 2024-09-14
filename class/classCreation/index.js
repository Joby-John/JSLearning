// class : (ES6 faeture) provides more structural and cleaner way 
//         to work with objects compared to traditional constructor 
//         function
//         eg. static keyword, encapsulation, inheritance 

class Product{
    constructor(name, price)
    {
        this.name = name;
        this.price = price;
    }

    displayProduct()
    {
        console.log(`${this.name} costs ${this.price.toFixed(2)}`);
    }
    calculateTotal(salesTax)
    {
        return this.price + this.price * salesTax;
    }
}

product1 = new Product("chewing Gum", 10);
product2 = new Product("pants", 500.50);

product1.displayProduct();
product2.displayProduct();

console.log(`The total is ${product1.calculateTotal(.05).toFixed(2)}`);
console.log(`The total is ${product2.calculateTotal(.05).toFixed(2)}`);
