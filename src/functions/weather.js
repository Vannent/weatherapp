export const fetchCity = (city) => {
    fetch("https://api.openweathermap.org/data/2.5/weather?q="
    + city + 
    "&units=imperial&appid=a7b91dd96a75372ea8906b2a8dee414d")
    .then((response) => {
        if (!response.ok) {
            alert("No weather found.")
            throw new Error("No weather found.");
        }
        return response.json();
    })
    .then((data) => weatherDisplay(data));
}

const weatherDisplay = (data) => {
    const { name } = data;
    const { description } = data.weather[0];
    const { temp } = data.main;
    const { temp_min } = data.main;
    const { temp_max } = data.main;
    const { humidity } = data.main;
    const { feels_like } = data.main;
    const { speed } = data.wind;
    weather(name, description, temp, temp_min, temp_max, humidity, feels_like, speed);
}

const weather = (name, description, temp, temp_min, temp_max, humidity, feels_like, speed) => {
    const weather = document.createElement("div");
    weather.className = "weather";
    
        const cityTitle = document.createElement("div");
        cityTitle.className = "cityTitle";
        cityTitle.innerText = name;

        const weatherDescription = document.createElement("div");
        weatherDescription.className = "weatherDescription";
        weatherDescription.innerText = description.toUpperCase();

        const weatherDegrees = document.createElement("div");
        weatherDegrees.className = "weatherDegrees";

            const degreeOne = document.createElement("div");
            degreeOne.className = "minmax";
            degreeOne.innerText = temp_min.toFixed(0);

            const degreeTwo = document.createElement("div");
            degreeTwo.className = "degreeTwo";
            degreeTwo.innerText = ((temp_min + temp) / 2).toFixed(0);

            const degreeThree = document.createElement("div");
            degreeThree.className = "degreeThree";
            degreeThree.innerText = temp.toFixed(0);

            const degreeFour = document.createElement("div");
            degreeFour.className = "degreeFour";
            degreeFour.innerText = ((temp_max + temp) / 2).toFixed(0);

            const degreeFive = document.createElement("div");
            degreeFive.className = "minmax"; 
            degreeFive.innerText = temp_max.toFixed(0);

        const weatherStatus = document.createElement("div");
        weatherStatus.className = "weatherStatus"

        const humiditay = document.createElement("div");
        humiditay.className = "humidity";
            const humiditayTitle = document.createElement("h1");
            humiditayTitle.textContent = "Humidity";
            const humiditayContent = document.createElement("p");
            humiditayContent.innerText = humidity.toFixed(0) + " %";

        const windspeed = document.createElement("div");
        windspeed.className = "windspeed";
            const windspeedTitle = document.createElement("h1");
            windspeedTitle.textContent = "Windspeed";
            const windspeedContent = document.createElement("p");
            windspeedContent.innerText = speed.toFixed(0) + " mph";

        const feelsLike = document.createElement("div");
        feelsLike.className = "feelsLike";
            const feelsLikeTitle = document.createElement("h1");
            feelsLikeTitle.textContent = "Feels Like";
            const feelsLikeContent = document.createElement("p");
            feelsLikeContent.innerText = feels_like;
            

    weather.append(cityTitle, weatherDescription, weatherDegrees, weatherStatus);
    weatherDegrees.append(degreeOne, degreeTwo, degreeThree, degreeFour, degreeFive);
    weatherStatus.append(humiditay, windspeed, feelsLike);
    humiditay.append(humiditayTitle, humiditayContent);
    windspeed.append(windspeedTitle, windspeedContent);
    feelsLike.append(feelsLikeTitle, feelsLikeContent);

    const main = document.querySelector("main");
    main.appendChild(weather);

    return weather;
}