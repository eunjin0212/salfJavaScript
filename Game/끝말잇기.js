const input = document.querySelector(".js-input"),
  btn = document.querySelector(".btn"),
  result = document.querySelector(".result"),
  form = document.querySelector(".form");

let word = document.querySelector(".quiz");
word.textContent = "강아지";

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (word.textContent[word.textContent.length - 1] === input.value[0]) {
    //단어 끝 검사
    result.textContent = "정답";
    word.textContent = input.value;
    input.value = "";
    input.focus();
    console.log(word);
  } else {
    result.textContent = "땡";
    input.value = "";
    input.focus();
  }
});
