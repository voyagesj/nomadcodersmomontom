const greetingForm = document.querySelector("#greetingForm");
greetingForm.addEventListener("submit", handleInsertName);
const jsname = greetingForm.querySelector(".js-name");

function initUserName() {
    paintUserName();
}

function handleInsertName(event) {
    event.preventDefault();

    saveName(jsname.value);
    paintUserName();
}

function saveName(name) {
    localStorage.setItem("userName", name);
}

function loadName() {
    return localStorage.getItem("userName");
}

function paintUserName() {
    const userName = loadName();
    if (userName !== null) {
        const jsgreeting = document.querySelector(".js-greeting");
        jsgreeting.innerText = `Hello, ${userName}!`;
        jsname.classList.add("hide");
    } else jsname.classList.remove("hide");
}


initUserName();