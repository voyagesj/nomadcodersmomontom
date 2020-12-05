const body = document.querySelector("body");

const IMG_NUMBER = 8;

function initBackground() {
    const randomNumber = generateRandom();
    paintImage(randomNumber);
}

function generateRandom() {
    return Math.floor(Math.random() * IMG_NUMBER);
}

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `./src/img/${imgNumber +1}.jpg`;

    image.classList.add("bgImage");
    body.appendChild(image);
}



initBackground();