const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greeting");
const btn = document.querySelector(".js-btn");


const USER_LOCALSTORAGE = "currentUser";
const SHOWING_ON = "showing";


function saveName(inputName) {
    localStorage.setItem(USER_LOCALSTORAGE, inputName);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    saveName(currentValue);
    sayHello(currentValue);
}

function askName() {
    form.classList.add(SHOWING_ON);
    form.addEventListener("submit", handleSubmit);
}

function removeName() {
    localStorage.removeItem(USER_LOCALSTORAGE);
    window.location.reload();
}

function sayHello(userName) {
    form.classList.remove(SHOWING_ON);
    greeting.classList.add(SHOWING_ON);
    btn.classList.add(SHOWING_ON);
    greeting.innerText = `Hello ${userName}`;
    btn.addEventListener("click", removeName);
}


function loadName() {
    const currentUser = localStorage.getItem(USER_LOCALSTORAGE);
    if (currentUser === null) {
        askName();
    } else {
        sayHello(currentUser);
    }
}

function init() {
    loadName();
}


init();