import loadHome from "../pages/home";

const getUser = () => {
    const getUserContainer = document.createElement("div");
    getUserContainer.className = "getUserContainer";

        const getUserTitle = document.createElement("h1");
        getUserTitle.className = "getUserTitle";
        getUserTitle.textContent = "What is your name?"

        const getUserInput = document.createElement("input");
        getUserInput.className = "getUserInput";
        getUserInput.type = "text";
        getUserInput.placeholder = "Chris...";
        getUserInput.addEventListener("click", (e) => {
            getUserInput.placeholder = "";
        });

        const getUserSubmit = document.createElement("button");
        getUserSubmit.className = "getUserSubmit";
        getUserSubmit.innerHTML = `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path fill="currentColor" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
        </svg>`
        getUserSubmit.addEventListener("click", (e) => {
            if (getUserInput.value !== "") {
                const value = getUserInput.value;
                localStorage.setItem("userName", value);
                loadHome();
            }
        })

    getUserContainer.append(getUserTitle, getUserInput, getUserSubmit);

    return getUserContainer;
};

const loadgetUser = () => {
    const main = document.querySelector("main");
    main.textContent = "";
    main.appendChild(getUser());
};

export default loadgetUser;