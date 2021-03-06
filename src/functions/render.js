import loadHome from "../pages/home";
import loadgetUser from "./getUser";

const main = () => {
    const main = document.createElement("main");
    return main;
};

const footer = () => {
    const footer = document.createElement("footer");
    footer.textContent = "Copyright ~ Vannent"
    return footer;
};

function render() {
    const content = document.getElementById("content");
    const container = document.createElement("div")
    container.id = "container";
    content.appendChild(container);
    container.appendChild(main());
    container.appendChild(footer());
    if (localStorage.getItem("userName") === null) {
        loadgetUser();
    } else {
        loadHome();
    }
}

export default render;