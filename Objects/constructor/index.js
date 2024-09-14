
// constructor = speacial method for defining the 
//               properties and methods of objects 

function Car(make, model, year, color)
{
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.own = function()
    {
        console.log(`I own ${this.make} ${this.model} of color ${this.color}, ${this.year} make`);   
    }
}

const car1  = new Car("Lamborgini", "Aventador", "2024", "black");
const car2  = new Car("Aston Martin", "Vantage", "2026", "Silver");

car1.own();
car2.own();