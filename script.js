
const getweather = (city) => {
    cityName.innerHTML = city;
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9d775f24a7msh29410adf6080490p1c4da4jsn085364f22be2',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    (async () => {
        try {
            const response = await fetch(url, options);
            let result = await (response.text());
            // console.log(result);
            result = JSON.parse(result);
            console.log(result);
            cloud_pct.innerHTML = result.cloud_pct
            temp.innerHTML = result.temp
            feels_like.innerHTML = result.feels_like
            humidity.innerHTML = result.humidity
            min_temp.innerHTML = result.min_temp
            max_temp.innerHTML = result.max_temp
            wind_speed.innerHTML = result.wind_speed
            wind_degrees.innerHTML = result.wind_degrees
            sunrise.innerHTML = result.sunrise
            sunset.innerHTML = result.sunset


        } catch (error) {
            console.error(error);
        }
    })()
}

const submit = document.querySelector('#submission');
const City = document.querySelector('#city');

submit.addEventListener("click", (e) => {
    e.preventDefault();

    console.log(City.value);
    getweather(City.value)
    // console.log("input event");
    // console.log(e);
})

getweather("Delhi")
