// Date(year, month, day, hour, minute, second, ms)
const currDate = new Date();

const customDate = new Date(2024, 1, 1, 18, 34, 70 );
const customStringDate = new Date("2024-01-15T12:34:00");
const customDateMilli = new Date(1700000000000);

console.log(currDate);
console.log(customDate);
console.log(customStringDate);
console.log(customDateMilli);


let year = currDate.getFullYear();
const month = currDate.getMonth();
const date = currDate.getDate();
const day  = currDate.getDay();
const hour = currDate.getHours();
const minutes = currDate.getMinutes();
const seconds = currDate.getSeconds();

console.log(year, month, date, day, hour, minutes, seconds);

currDate.setFullYear("2025");
year = currDate.getFullYear();
console.log(year, month, date, day, hour, minutes, seconds);


if(currDate>customDateMilli)
{
    console.log("valid date");
}
else
{
    console.log("invalid date");
}