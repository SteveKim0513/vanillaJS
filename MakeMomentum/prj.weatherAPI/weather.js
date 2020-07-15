const weather = document.querySelector(".js-weather");

const API_KEY = "7d9ea77ba9a2427df437f4370a5f5efe";
const COORDS = "coords";


function getWeather(lat, lng) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function (response) {
        return response.json();
    }).then(function (json) {
        const temp = json.main.temp;
        const place = json.name;
        weather.innerText = `${temp} @ ${place}`;
    });
}

function saveCoords(coordsObj) {
    localStorage.setItem("coords", JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coords = {
        // in case of "key = variable Name"
        // same with "latitude(key): latitude(variable from upper)"
        latitude,
        longitude
    };
    saveCoords(coords);
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log("Can't find location");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);

        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}


function init() {
    loadCoords();
}


init();