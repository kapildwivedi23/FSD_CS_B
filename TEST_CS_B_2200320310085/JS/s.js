const apiKey = "003b60b0a9e1e0cf160d68acc1d20911";

function getWeather() {
    const city = document.getElementById("cityInput").value;
    if (!city) {
        alert("Please enter a city name.");
        return;
    }
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) { 
                displayWeather(data);
            } else {
                alert("City not found.");
            }
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            alert("Unable to fetch weather data.");
        });
}

function displayWeather(data) {
    const weatherInfo = document.getElementById("weatherInfo");
    
    const cityName = data.name;
    const temp = data.main.temp;
    const pressure = data.main.pressure;
    const humidity = data.main.humidity;
    const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
    const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();
    const timezone = data.timezone / 3600;
    
    weatherInfo.innerHTML = `
        <h2>${cityName}</h2>
        <p><strong>Temperature:</strong> ${temp}°C</p>
        <p><strong>Pressure:</strong> ${pressure} hPa</p>
        <p><strong>Humidity:</strong> ${humidity}%</p>
        <p><strong>Sunrise:</strong> ${sunrise}</p>
        <p><strong>Sunset:</strong> ${sunset}</p>
        <p><strong>Timezone:</strong> UTC${timezone >= 0 ? "+" : ""}${timezone}</p>
    `;
}
