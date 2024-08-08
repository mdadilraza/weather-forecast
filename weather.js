let inputBox = document.querySelector("#cityInput");
let getWeather = document.querySelector("#getWeather");

let display = document.querySelector("#result");

const apiKey = "3275306a1cd9412591a61754240808"

getWeather.addEventListener('click', () => {

    let fetchedWeather = async () => {
        let data = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${inputBox.value}&aqi=no`);

        let weatherData = await data.json();
        
        console.log(weatherData);
        
        try {

            display.innerHTML = `<h1 id="deg">${weatherData.current.temp_c}&deg; C</h1>
                                <h1>${weatherData.current.condition.text}</h1>
                                <h1>Humidity : ${weatherData.current.humidity}%</h1>
                                <h1>Wind Speed : ${weatherData.current.wind_kph} Km/h</h1>`;


        } catch {
            display.innerHTML = `<h1>${weatherData.error.message}</h1>`
        }

    }

    fetchedWeather();

})