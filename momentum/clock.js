const clockBox = document.querySelector(".clock");
const clockTitle = clockBox.querySelector("h1");

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  //시간이 10보다 작으면 앞에 0을 붙이기 아니면 그냥 시간
  clockTitle.innerText = `
  ${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
  //주기적인 실행 --> 일정한 시간 간격
}
init();
