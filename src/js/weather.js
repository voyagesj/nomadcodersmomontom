const API_KEY = "342baaa3d59d18e7e70faa8dc1b7f19e";
const COORDS = "locationCords";
const jsweather = document.querySelector(".js-weather");
let coordsObj = {};


function getWeatherbyGeo(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
        .then(function(response) { return response.json() })
        .then(function(json) {
            const temperature = json.main.temp;
            const place = json.name;
            const weather = json.weather[0].main;
            const weatherIcon = `http://openweathermap.org/img/w/${json.weather[0].icon}.png`;
            jsweather.innerHTML = `${temperature}℃ @ ${place} <img src='${weatherIcon}' title='${weather}' />`;
        });
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    coordsObj = {
        latitude,
        longitude
    }
    saveCoords(coordsObj);
    getWeatherbyGeo(coordsObj.latitude, coordsObj.longitude);
}

function handleGeoError() {
    console.log("Cant access geo location");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function loadCoords() {
    const loadedCords = localStorage.getItem(COORDS);
    return (loadedCords !== null) ? JSON.parse(loadedCords) : null;
}

function initWeather() {
    coordsObj = loadCoords()
    if (coordsObj === null) {
        askForCoords();
    } else {
        getWeatherbyGeo(coordsObj.latitude, coordsObj.longitude);
    }
}

initWeather();