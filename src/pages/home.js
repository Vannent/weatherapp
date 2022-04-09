import { fetchNextWeather } from "../functions/nextWeather";
import loadsearchButton from "../functions/searchButton";
import { fetchCity } from "../functions/weather";

export const home = () => {
    const home = document.createElement("div");
    home.className = "home";

        const greet = document.createElement("div");
        greet.className = "greeter"
        greet.innerHTML = "Hello " + '<b>' + localStorage.getItem("userName") + '</b>' + "!";

    home.appendChild(greet)
return home;
}

const loadHome = () => {
    const main = document.querySelector("main");
    main.textContent = "";
    main.appendChild(home());
    loadsearchButton();
    fetchCity("New York");
    fetchNextWeather("New York");
}

export default loadHome;