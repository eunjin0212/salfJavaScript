const quizScreen = document.querySelector(".quiz"),
  form = document.querySelector(".form"),
  input = form.querySelector(".input"),
  btn = form.querySelector(".btn"),
  answerScrren = document.querySelector(".result");
let number1 = Math.ceil(Math.random() * 9),
  number2 = Math.ceil(Math.random() * 9),
  result = number1 * number2;
quizScreen.textContent = String(number1) + "X" + String(number2) + "는?";
btn.textContent = "입력!";
console.log(quizScreen);

form.addEventListener("submit", function answer(event) {
  event.preventDefault();
  if (result === Number(input.value)) {
    answerScrren.innerText = "정답";
    (number1 = Math.ceil(Math.random() * 9)),
      (number2 = Math.ceil(Math.random() * 9)),
      (result = number1 * number2);
    quizScreen.textContent = String(number1) + "X" + String(number2) + "는?";
    input.value = "";
  } else {
    answerScrren.innerText = `땡! 정답은${result}!! 다음문제를 푸세요~`;
    input.value = "";
    (number1 = Math.ceil(Math.random() * 9)),
      (number2 = Math.ceil(Math.random() * 9)),
      (result = number1 * number2);
    quizScreen.textContent = String(number1) + "X" + String(number2) + "는?";
  }
});
