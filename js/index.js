function cellStatus() {
  if (this.className === "alive") {
    this.setAttribute("class", "dead");
  } else {
    this.setAttribute("class", "alive");
  }
}

const htmlGenerator = (parameterRow, parameterColumn) => {
  const rows = parameterRow;
  const cols = parameterColumn;
  const gameBoard = document.querySelector(".game-container");
  const board = document.createElement("div");
  board.className = "boardDiv";
  let ids = 0;
  let row;
  let cell;
  for (let i = 0; i < parameterRow; i++) {
    row = document.createElement("div");

    for (let j = 0; j < parameterColumn; j++) {
      ids++;
      cell = document.createElement("div");
      cell.setAttribute("id", `${i}_${j}`);
      cell.setAttribute("class", "dead");
      cell.classList.add(ids);
      row.appendChild(cell);
      cell.addEventListener("click", cellStatus);
    }
    board.appendChild(row);
  }
  gameBoard.appendChild(board);
  return gameBoard;
};

const gameTable = (numberOfColumns, numberOfRows) => {
  const nestedArray = [];
  for (let i = 0; i < numberOfRows; i++) {
    nestedArray.push([]);
  }

  for (let i = 0; i < numberOfColumns; i++) {
    for (let j = 0; j < numberOfRows; j++) {
      nestedArray[j].push([0]);
    }
  }
  console.table(nestedArray);
  return nestedArray;
};
gameTable();

window.onload = () => htmlGenerator(40, 40);
