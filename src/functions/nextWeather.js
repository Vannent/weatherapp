const fetchNextWeather = (city) => {
    fetch("http://api.openweathermap.org/data/2.5/forecast?q="
    + city + 
    "&units=imperial&appid=a7b91dd96a75372ea8906b2a8dee414d")
    .then((response) => {
        if (!response.ok) {
            alert("No weather found.")
            throw new Error("No weather found.");
        }
        return response.json();
    })
    .then((data) => nextWeather(data));
}

const nextWeather = (data) => {
    const nextWeather = document.createElement("div"); 
    nextWeather.className = "nextWeather";

        const dayOne = document.createElement("div");
            const dayOneTitle = document.createElement("div");
            dayOneTitle.className = "nextWeatherTitle";
            dayOneTitle.innerText = data[0].data;

            const dayOneDesc = document.createElement("div");
            dayOneDesc.className = "nextWeatherDesc"
            dayOneDesc.innerText = data[0].main[1];

            const dayOneHumidity = document.createElement("div");
            dayOneHumidity.className = "nextWeatherHumidity"
            dayOneHumidity.innerText = "hello"


        
}