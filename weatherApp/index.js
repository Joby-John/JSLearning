const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card  = document.querySelector(".card");

const apiKey = "Enter here";

weatherForm.addEventListener("submit", async (event) =>
{
    event.preventDefault();

    const city = cityInput.value;

    if(city)
    {
        try{
            const weatherData = await getWeatherData(city);
            displayWeatherinfo(weatherData);
        }
        catch(error)
        {
            console.error(error);
            displayError(error);
        }
    }
    else{
        displayError("Please Enter a City");
    }
});

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    const response = await fetch(apiUrl);
    if(!response.ok)
    {
        throw new Error("City not found");
    }

    return await response.json();
}

function displayWeatherinfo(data)
{
    const {name: city, 
           main: {temp, humidity}, 
           weather: [{description, id}]} = data;

    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p")
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    cityDisplay.textContent = city;
    cityDisplay.classList.add("cityDisplay");

    tempDisplay.textContent = `${(temp - 273.15).toFixed(1)} ºC`;
    tempDisplay.classList.add("tempDisplay");

    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    humidityDisplay.classList.add("humidityDisplay");
    
    descDisplay.textContent = description;
    descDisplay.classList.add("descDisplay");
    weatherEmoji.textContent = getWeatherEmoji(id);
    weatherEmoji.classList.add("weatherEmoji");



    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);

}

function getWeatherEmoji(weatherId)
{
    if(weatherId>=200 && weatherId<300)
    {
        return "⛈️";
    }
    else if(weatherId>=300 && weatherId<400)
    {
        return "🌦️";
    }
    else if(weatherId>=500 && weatherId<600)
    {
        return "🌧️";
    }
    else if(weatherId>=600 && weatherId<700)
    {
        return "🌨️";
    }
    else if(weatherId>=700 && weatherId<800)
    {
        return "💨";
    }
    else if(weatherId === 800)
    {
        return "☀️";
    }
    else if(weatherId>800)
    {
        return "☁️";
    }
    else{
        return "❓";
    }

}

function displayError(message)
{
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
    
}