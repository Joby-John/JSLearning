// getter - special method that makes a property raedable
// setter - special method that makes a property writable

// used to validate and modify a value when reading or writing a property

class Rectangle{
    constructor(length, width)
    {
        this.length = length;
        this.width = width;
    }

    set length(newLength)
    {
        if(newLength>0)
        {
            this._length = newLength;
        }
        else
        {
            console.error("height should be a positive number");
        }
    }

    set width(newWidth)
    {
        if(newWidth>0)
            {
                this._width = newWidth;
            }
            else
            {
                console.error("Width should be a positive number");
            }
    }

    get length()
    {
        return this._length;
    }
    get width()
    {
        return this._width;
    }

    get area()
    {
        return this._width*this._length;
    }
}


rectangle1 = new Rectangle(1, 5);

rectangle1.length = -1000;
rectangle1.width = "pizza";

rectangle1.length = 10;
rectangle1.width = 5;
console.log(`reactangle of length ${rectangle1.length}cm and breadth ${rectangle1.width}cm has area  of ${rectangle1.area} cmsq`);