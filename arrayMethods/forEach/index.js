

let numbers = [1,2,3,4,5];

numbers.forEach(triple);//x3
numbers.forEach(double);//x2
numbers.forEach(square);
numbers.forEach(display);//display

function display(element)
{
    console.log(element);
}

function double(element, index, array)
{
    array[index] = element*2;
}

function triple(element,index, array)
{
    array[index] *= 3;
}

function square(element, index, array)
{
    array[index] = Math.pow(element, 2);
}

