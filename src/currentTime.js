const jstime = document.querySelector(".js-time");


function initTime() {
    currentTime();
}


function currentTime() {
    const currentDate = new Date();

    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    jstime.innerText = `${hours}:${minutes}:${seconds}`;
}



initTime();