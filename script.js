document.getElementById('weatherForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const apiKey = '2517e07cf4cf062811d4ce15bd910bf7'; // Replace with your API key
    const city = document.getElementById('cityInput').value.trim();
    if (city === '') {
        alert('Please enter a city name');
        return;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherDiv = document.getElementById('weather');
            const weatherInfo = `
                <p>City: ${data.name}</p>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].main}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
                <p>Description: ${data.weather[0].description}</p>
            `;
            weatherDiv.innerHTML = weatherInfo;
        })
        .catch(error => console.error('Error fetching weather:', error));
  });
  