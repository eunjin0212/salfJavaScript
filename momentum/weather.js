const weather = document.querySelector(".weather");
const API_KEY = "38cb84355b7ad3bb3676b3b9e6b11d39"; //내 위치
const COORDS = "coords";

function getWeather(lat, lng) {
  fetch(
    //요청
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `${temperature}℃,\n ${place}`;
    });
}

function saveCoords(coordsObj) {
  //위치 저장
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

// 위치정보 획득 성공
function weatherSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude: latitude,
    longitude: longitude,
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

// 위치정보 획득 실패
function weatherError() {
  console.log("위치 정보를 얻을 수 없습니다.");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(weatherSuccess, weatherError); // 유저의 현재 위치 정보를 요청하고, 성공하면 첫 번째 함수를, 실패하면 두 번째 함수를 실행.
}
// 로컬 스토리지에 정보가 없으면 요청
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
