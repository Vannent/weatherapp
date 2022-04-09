import { home } from "../pages/home";
import { fetchNextWeather } from "./nextWeather";
import { fetchCity } from "./weather";

const searchButton = () => {
    const searchButton = document.createElement("div");
    searchButton.className = "searchButton-container";
    let showButton = true;

        const button = document.createElement("div");
        button.className = "searchButton";
        button.innerHTML = `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path fill="currentColor" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
        </svg>`;
        button.addEventListener("click", (e) => {
            if (showButton === true) {
                searchInput.style.display = "flex";
                showButton = false;
            } else if (showButton === false) {
                searchInput.style.display = "none";
                const main = document.querySelector("main");
                main.textContent = "";
                main.append(home())
                loadsearchButton();
                fetchCity(searchInput.value);
                showButton = true;
                fetchNextWeather(searchInput.value);
                searchInput.placeholder = "San Francisco...";
            };
        });

        const searchInput = document.createElement("input");
        searchInput.className = "searchInput";
        searchInput.type = "text";
        searchInput.placeholder = "San Francisco...";
        searchInput.style.display = "none";
        searchInput.addEventListener("click", (e) => {
            searchInput.placeholder = "";
        });



    searchButton.append(button, searchInput);
    return searchButton;
}

const loadsearchButton = () => {
    const main = document.querySelector("main");
    main.appendChild(searchButton());
}

export default loadsearchButton;