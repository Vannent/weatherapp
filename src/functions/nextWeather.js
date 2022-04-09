export const fetchNextWeather = (city) => {
    fetch("http://api.openweathermap.org/data/2.5/forecast?q="
    + city + // hidestream
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


    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun",  "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",];
    const date = new Date();
    const dayName = date.getDay();


const nextWeather = (data) => {
    console.log(days[dayName])
    console.log(data.list[0])
    const nextWeather = document.createElement("div"); 
    nextWeather.className = "nextWeather";
        const dayOne = document.createElement("div");
            const dayOneName = document.createElement("div");
            dayOneName.className = "nextWeatherName";
            dayOneName.innerText = days[dayName];

            const dayOneTitle = document.createElement("div");
            dayOneTitle.className = "nextWeatherTitle";
            dayOneTitle.innerText = data.list[0].weather[0].main;

            const dayOneDegree = document.createElement("div");
            dayOneDegree.className = "nextWeatherDegree";
            dayOneDegree.innerText = data.list[0].main.temp.toFixed(0) + "°";

            const dayOneHumidity = document.createElement("div");
            dayOneHumidity.className = "nextWeatherHumidity";
            dayOneHumidity.innerText = data.list[0].main.humidity.toFixed(0) + "%";


        const dayTwo = document.createElement("div");
            const dayTwoName = document.createElement("div");
            dayTwoName.className = "nextWeatherName";
            dayTwoName.innerText = days[dayName + 1];

            const dayTwoTitle = document.createElement("div");
            dayTwoTitle.className = "nextWeatherTitle";
            dayTwoTitle.innerText = data.list[5].weather[0].main;

            const dayTwoDegree = document.createElement("div");
            dayTwoDegree.className = "nextWeatherDegree";
            dayTwoDegree.innerText = data.list[5].main.temp.toFixed(0) + "°";

            const dayTwoHumidity = document.createElement("div");
            dayTwoHumidity.className = "nextWeatherHumidity";
            dayTwoHumidity.innerText = data.list[5].main.humidity.toFixed(0) + "%";


        const dayThree = document.createElement("div");
            const dayThreeName = document.createElement("div");
            dayThreeName.className = "nextWeatherName";
            dayThreeName.innerText = days[dayName + 2];

            const dayThreeTitle = document.createElement("div");
            dayThreeTitle.className = "nextWeatherTitle";
            dayThreeTitle.innerText = data.list[13].weather[0].main;

            const dayThreeDegree = document.createElement("div");
            dayThreeDegree.className = "nextWeatherDegree";
            dayThreeDegree.innerText = data.list[13].main.temp.toFixed(0) + "°";

            const dayThreeHumidity = document.createElement("div");
            dayThreeHumidity.className = "nextWeatherHumidity";
            dayThreeHumidity.innerText = data.list[13].main.humidity.toFixed(0) + "%";


        const dayFour = document.createElement("div");
            const dayFourName = document.createElement("div");
            dayFourName.className = "nextWeatherName";
            dayFourName.innerText = days[dayName + 3];

            const dayFourTitle = document.createElement("div");
            dayFourTitle.className = "nextWeatherTitle";
            dayFourTitle.innerText = data.list[21].weather[0].main;

            const dayFourDegree = document.createElement("div");
            dayFourDegree.className = "nextWeatherDegree";
            dayFourDegree.innerText = data.list[21].main.temp.toFixed(0) + "°";

            const dayFourHumidity = document.createElement("div");
            dayFourHumidity.className = "nextWeatherHumidity";
            dayFourHumidity.innerText = data.list[21].main.humidity.toFixed(0) + "%";


        const dayFive = document.createElement("div");
            const dayFiveName = document.createElement("div");
            dayFiveName.className = "nextWeatherName";
            dayFiveName.innerText = days[dayName + 4];

            const dayFiveTitle = document.createElement("div");
            dayFiveTitle.className = "nextWeatherTitle";
            dayFiveTitle.innerText = data.list[29].weather[0].main;

            const dayFiveDegree = document.createElement("div");
            dayFiveDegree.className = "nextWeatherDegree";
            dayFiveDegree.innerText = data.list[29].main.temp.toFixed(0) + "°";

            const dayFiveHumidity = document.createElement("div");
            dayFiveHumidity.className = "nextWeatherHumidity";
            dayFiveHumidity.innerText = data.list[29].main.humidity.toFixed(0) + "%";    

    dayOne.append(dayOneName, dayOneTitle, dayOneDegree, dayOneHumidity);
    dayTwo.append(dayTwoName, dayTwoTitle, dayTwoDegree, dayTwoHumidity);
    dayThree.append(dayThreeName, dayThreeTitle, dayThreeDegree, dayThreeHumidity);
    dayFour.append(dayFourName, dayFourTitle, dayFourDegree, dayFourHumidity);
    dayFive.append(dayFiveName, dayFiveTitle, dayFiveDegree, dayFiveHumidity);

    nextWeather.append(dayOne, dayTwo, dayThree, dayFour, dayFive);

    const main = document.querySelector("main");
    main.appendChild(nextWeather);
    
    return nextWeather;
}