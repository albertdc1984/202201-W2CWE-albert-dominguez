const rows = 20;
const columns = 20;

const gameTable = (numberOfColumns, numberOfRows) => {
  const nestedArray = [];
  for (let i = 0; i < numberOfRows; i++) {
    nestedArray.push([]);
  }

  for (let i = 0; i < numberOfColumns; i++) {
    for (let j = 0; j < numberOfRows; j++) {
      nestedArray[i].push(0);
    }
  }
  console.table(nestedArray);
  return nestedArray;
};

const arrayTable = gameTable(rows, columns);

function cellStatus() {
  const location = this.id.split("_");
  const rowLocation = Number(location[0]);
  const columnLocation = Number(location[1]);

  if (this.className === "alive") {
    this.setAttribute("class", "dead");
    arrayTable[rowLocation][columnLocation] = 0;
  } else {
    this.setAttribute("class", "alive");
    arrayTable[rowLocation][columnLocation] = 1;
  }
}

const htmlGenerator = (parameterRow, parameterColumn) => {
  const gameBoard = document.querySelector(".game-container");
  const board = document.createElement("div");
  board.className = "boardDiv";
  let ids = 0;
  let row;
  let cell;

  for (let i = 0; i < parameterRow; i++) {
    row = document.createElement("div");
    row.setAttribute("class", "row");
    for (let j = 0; j < parameterColumn; j++) {
      ids++;
      cell = document.createElement("div");
      cell.setAttribute("id", `${i}_${j}`);
      cell.setAttribute("class", "dead");
      cell.classList.add(ids);
      cell.addEventListener("click", cellStatus);
      cell.addEventListener("mousemove", cellStatus);
      row.appendChild(cell);
    }
    board.appendChild(row);
  }

  gameBoard.appendChild(board);
  return board;
};

window.onload = () => {
  htmlGenerator(rows, columns);
  gameTable(rows, columns);
};
