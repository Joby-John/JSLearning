// Error : an object that is created to represent a  problem that 
//         occur often with user imput or etablising a conncetion  


//network errors
//promise errors
//security errors


// we can use
//  try{}
//  catch{}
//  finally{} 

// try{
//     console.log(x);
// }
// catch (error)
// {
//     console.error(error);
// }
// finally{
//     //close files
//     //close connections
//     //release resources
//     console.log("This always executes");
// }

// console.log("You have reached the end")



try{
    const dividend = window.prompt("Enter a divident");
    const divisor = window.prompt("Enter a divisor");
    const result = dividend/divisor;

    if(divisor == 0)
    {
        throw new Error("You cant divide by zero");
    }
    if(isNaN(dividend) || isNaN(divisor))
    {
        throw new Error("The didvidend and divisor should be a number");
    }
    window.alert(`Result is ${result}`);
}
catch(error)
{
    console.error(error);
}
finally
{
    window.alert("This executes none the less");
}





