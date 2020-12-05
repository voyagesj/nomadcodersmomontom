const jstime = document.querySelector(".js-time");


function initTime() {
    setInterval(
        currentTime, 1000
    )
}


function currentTime() {
    const currentDate = new Date();

    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    jstime.innerText = `${(hours < 10) ? `0${hours}`:`${hours}`}:${(minutes < 10) ? `0${minutes}`:`${minutes}`}:${(seconds < 10) ? `0${seconds}`:`${seconds}`}`;
}



initTime();