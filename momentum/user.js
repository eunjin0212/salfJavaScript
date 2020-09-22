const form = document.querySelector(".js-form"),
  message = document.querySelector(".greetingMessage"),
  input = form.querySelector(".js-input"),
  showUserName = "showing";

const User_Box = "loginUser";

function saveName(text) {
  localStorage.setItem(User_Box, text);
}

function userSubmit(event) {
  //엔터치면 새로고침 막아야지
  event.preventDefault();
  const userValue = input.value;
  helloUser(userValue);
  saveName(userValue);
}
function nextPage() {
  form.removeChild(input);
  setTimeout(function () {
    location.href = "momentum-todo.html";
<<<<<<< HEAD
<<<<<<< master
  }, 2000);
=======
  }, 3000);
>>>>>>> local
=======
  });
>>>>>>> 2dcd82f38ba5364f4fde6baec9029135b092e488
}
function askUser() {
  //유저 물어보기
  form.classList.add(showUserName);
  form.addEventListener("submit", userSubmit);
  message.innerText = "What's your name?";
}
function helloUser(text) {
  //인사하기
  form.classList.remove(showUserName);
  message.classList.add(showUserName);
  message.innerText = `Hello ${text}`;
  nextPage();
}
function getUserName() {
  const loginUser = localStorage.getItem(User_Box);
  if (loginUser === null) {
    askUser(); //user가 없다면
  } else {
    //user가 있다면
    helloUser(loginUser);
    form.classList.remove(loginUser);
    nextPage();
  }
}

function init() {
  getUserName();
}
init();
