
function updateClock()
{
    const currTime = new Date(); 
    let hour = currTime.getHours();
    const meridiem = hour>=12?"PM":"AM";
    hour = hour%12 || 12;
    const minutes = currTime.getMinutes().toString().padStart(2,0);
    const seconds = currTime.getSeconds().toString().padStart(2,0);

    let timeString = `${hour}:${minutes}:${seconds} ${meridiem}`;  
    document.getElementById("clock").innerHTML = timeString; 
    
} 
updateClock();

setInterval(updateClock, 1000);