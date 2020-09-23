const todoform = document.querySelector(".todo-form"),
  toDoList = document.querySelector(".todo-list"),
  toDoMessage = todoform.querySelector(".todo-message"),
  toDoInput = todoform.querySelector(".todo-input");

const ToDo_Box = "userToDo";
let userToDo = [];

function deletToDo(event) {
  //삭제버튼 이벤트
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li); //리스트에 있는것 지우기
  const clean = userToDo.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  userToDo = clean;
  saveToDo();
  toDoMessage.innerText = "What is your main focus for today?";
}

function saveToDo(text) {
  //todo 저장하기
  localStorage.setItem(ToDo_Box, JSON.stringify(userToDo));
}
const newToDo = userToDo.length + 1;
function writeToDo(text) {
  //todo쓰면 삭제버튼 만들고 작성하면 새로 리스트 추가하기
  const li = document.createElement("li");
  const deletBtn = document.createElement("button");
  deletBtn.className = "btn";
  const span = document.createElement("span");
  deletBtn.innerHTML = "❌";
  deletBtn.addEventListener("click", deletToDo);
  span.innerText = text;
  li.appendChild(deletBtn);
  li.appendChild(span);
  li.id = newToDo;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newToDo,
  };
  if (userToDo.push(toDoObj)) {
    saveToDo();
    toDoMessage.innerText = "Today";
  }
}

function toDoSubmit(event) {
  //엔터치면 막기
  event.preventDefault();
  const toDoValue = toDoInput.value;
  toDoInput.value = "";
  writeToDo(toDoValue);
}

const getToDos = localStorage.getItem(ToDo_Box);
function getToDo() {
  if (getToDos !== null) {
    //todo가 비지 않았다면
    const addToDo = JSON.parse(getToDos);
    addToDo.forEach(function (toDo) {
      writeToDo(toDo.text);
    });
    toDoMessage.innerText = "What is your main focus for today?";
  } else {
    //비었다면
    toDoMessage.innerText = "Today";
  }
  return;
}
console.log(userToDo);
function init() {
  getToDo();
}
todoform.addEventListener("submit", toDoSubmit);
init();
