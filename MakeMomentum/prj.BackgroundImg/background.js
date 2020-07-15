const body = document.querySelector("body");

const NUM_OF_IMG = 6;


function paintIMG(imgNum) {
    const image = new Image();
    image.src = `images/${imgNum+1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);

}

function genRandom() {
    const Num = Math.floor(Math.random() * NUM_OF_IMG);
    return Num;
}

function init() {
    const randomNum = genRandom();
    paintIMG(randomNum);

}


init();