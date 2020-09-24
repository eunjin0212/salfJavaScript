const body = document.body;
let table = document.createElement("table"),
  rowBox = new Array(),
  cellBox = new Array(),
  allCellBox = new Array(), // 칸 전부
  turn = "x",
  fullcheck = false;

for (let i = 0; i < 3; i++) {
  allCellBox[i] = new Array();
}

const clickCheck = function (event) {
  //event.target 은 cell
  //parentNode는 row
  //indexOf = 호출한 스트링 객체에서 주어진 값과 일치하는 첫번째 인덱스를 반환
  let rowCheck = rowBox.indexOf(event.target.parentNode), //현재 클릭된 가로행
    cellCheck = cellBox[rowCheck].indexOf(event.target); //가로행에서 클릭된 칸 = 열
  if (cellBox[rowCheck][cellCheck].textContent === "") {
    cellBox[rowCheck][cellCheck].textContent == turn;
  }
};
const creatTictacto = function () {
  for (let i = 0; i < 3; i++) {
    //칸들 생성
    let row = document.createElement("tr"); //배열로 선언
    cellBox[i] = new Array(); //cellBox에 2차원 배열 생성
    rowBox.push(row); //카로 생성
    for (let j = 0; j < 3; j++) {
      let cell = document.createElement("td");
      cellBox[i].push(cell);
      row.appendChild(cell);
      cell.addEventListener(
        "click",
        clickCheck
        //칸을 눌렀을때 채워져 있는지 확인
      );
    }
    table.appendChild(row);
  }
  body.appendChild(table);
  console.log("cellBox", cellBox);
  console.log("rowBox", rowBox);
};
creatTictacto();
