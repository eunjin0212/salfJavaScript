const body = document.querySelector("body");
const IMG_NUMBER = 4;

function showImg(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}
function imgRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}
function init() {
  const randomNumber = imgRandom();
  showImg(randomNumber);
}
init();
