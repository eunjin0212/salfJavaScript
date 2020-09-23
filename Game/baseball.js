const bbResult = document.querySelector(".bs-result"),
  bbForm = document.querySelector(".bs-form"),
  bbInput = bbForm.querySelector(".bs-input"),
  bbBtn = bbForm.querySelector(".bs-btn");
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let numberArr = [];
bbInput.maxLength = 4;
//bbInput.type = "text";
//bbInput.type = Number;

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
    console.log(pickNumber);
  }
  console.log(numberArr);
}
function resetNum() {
  bbInput.value = "";
}

numFunc();

let wrongAnswer = 0;

bbForm.addEventListener("submit", function (event) {
  event.preventDefault(); //새로고침 막아주기
  const result = bbInput.value;
  console.log(bbInput.value);
  if (result === numberArr) {
    //홈런인지 아닌지
    bbResult.textContent = "홈런";
    numFunc();
    resetNum();
    wrongAnswer = 0;
  } else {
    //몇번 스트라이크, 볼을 했는지
    const resultArr = result;
    let strike = 0;
    let ball = 0;
    wrongAnswer++;
    if (wrongAnswer > 3) {
      //정답 횟수 제한
      bbResult.textContent = "한도초과! 답은" + numberArr.join(",");
      //join은 "",""... 이런식으로 합쳐줌
      numFunc();
      resetNum();
      wrongAnswer = 0;
    } else {
      for (let i = 0; i < 3; i++) {
        if (Number(resultArr[i]) === numberArr[i]) {
          //타입을 숫자로 변환
          strike++;
        } else if (numberArr.indexOf(Number(resultArr[i])) > -1) {
          //배열 안에 일치하는 것 찾기
          ball++;
        }
      }
      bbResult.textContent = strike + "스트라이크" + ball + "볼";
      resetNum();
      c;
      console.log(resultArr);
    }
  }
});