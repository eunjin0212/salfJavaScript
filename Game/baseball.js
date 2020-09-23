const bbResult = document.querySelector(".bs-result"),
  bbForm = document.querySelector(".bs-form"),
  bbInput = bbForm.querySelector(".bs-input"),
  bbBtn = bbForm.querySelector(".bs-btn");
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let numberArr = [];

function maxLengthCheck(object) {
  if (object.value.length > object.maxLength) {
    object.value = object.value.slice(0, object.maxLength);
  }
} //숫자 제한하기

function numFunc() {
  //랜덤 숫자 만들기
  number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  numberArr = [];
  for (let i = 0; i < 4; i++) {
    //4개숫자들을 반복적으로 뽑음
    let pickNumber = number.splice(Math.floor(Math.random() * (9 - i)), 1);
    //하나씩 줄어드는 숫자를 표현되게 i를 빼줌
    //splice 배열의 요소를 변경할 때 사용
    numberArr.push(pickNumber[0]); //배열의 첫번째 자리를 추출
  }
  console.log("문제", numberArr);
  //console.log(typeof numberArr); //object
}

function resetNum() {
  bbInput.value = "";
  bbInput.focus();
}

numFunc();

let wrongAnswer = 0;

bbForm.addEventListener("submit", function (event) {
  event.preventDefault(); //새로고침 막아주기
  let result = bbInput.value;
  if (result === numberArr.join("")) {
    //홈런인지 아닌지
    bbResult.textContent = "홈런";
    numFunc();
    resetNum();
    wrongAnswer = 0;
  } else {
    //몇번 스트라이크, 볼을 했는지
    const resultArr = result.split("");
    //console.log(typeof result); //string
    let strike = 0;
    let ball = 0;
    wrongAnswer++;
    if (wrongAnswer > 4) {
      //정답 횟수 제한
      bbResult.textContent = "한도초과! 답은" + numberArr;
      //join은 "",""... 이런식으로 합쳐줌
      numFunc();
      resetNum();
      wrongAnswer = 0;
    } else {
      for (let i = 0; i <= 3; i++) {
        if (Number(resultArr[i]) == numberArr[i]) {
          //타입을 숫자로 변환
          strike++;
        } else if (numberArr.indexOf(Number(resultArr[i])) > -1) {
          //배열 안에 일치하는 것 찾기
          ball++;
        }
        console.log(numberArr.indexOf(Number(resultArr[i])) > 0);
      }
      bbResult.textContent = strike + "스트라이크" + ball + "볼";
      resetNum();

      // console.log("resultArr", resultArr);
    }
  }
});
