const home = () => {
    const home = document.createElement("div");
    home.className = "home";

        const greet = document.createElement("div");
        greet.className = "greeter"
        greet.innerHTML = "Hello " + '<b>' + localStorage.getItem("userName") + '</b>' + "!";

    home.append(greet)
return home;
}

const loadHome = () => {
    const main = document.querySelector("main");
    main.textContent = "";
    main.appendChild(home());
}

export default loadHome;