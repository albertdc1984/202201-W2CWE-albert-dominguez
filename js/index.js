const rows = 20;
const columns = 20;
const nestedArray = [];
const nextTable = [];
let started = false;
let timer;
const evolutionSpeed = 1000;
const start = document.querySelector(".start-button");
const stop = document.querySelector(".stop-button");

const gameTable = (numberOfcolumns, numberOfRows) => {
  for (let i = 0; i < numberOfRows; i++) {
    nestedArray.push([]);
    nextTable.push([]);
  }

  for (let i = 0; i < numberOfcolumns; i++) {
    for (let j = 0; j < numberOfRows; j++) {
      nestedArray[i].push(0);
      nextTable[i].push(0);
    }
  }
  console.table(nestedArray);
  console.table(nextTable);
  return nestedArray;
};

function cellStatus() {
  const location = this.id.split("_");
  const rowLocation = Number(location[0]);
  const columnumnLocation = Number(location[1]);

  if (this.className === "alive") {
    this.setAttribute("class", "dead");
    nestedArray[rowLocation][columnumnLocation] = 0;
  } else {
    this.setAttribute("class", "alive");
    nestedArray[rowLocation][columnumnLocation] = 1;
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
      row.appendChild(cell);
      cell.addEventListener("click", cellStatus);
    }
    board.appendChild(row);
  }

  gameBoard.appendChild(board);
  return board;
};
const neighborCount = () => {
  debugger;
  let counter = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (i - 1 >= 0) {
        if (nestedArray[i - 1][j] === 1) {
          counter++;
        }
      }

      if (i - 1 >= 0 && j - 1 >= 0) {
        if (nestedArray[i - 1][j - 1] === 1) {
          counter++;
        }
      }

      if (i - 1 >= 0 && j + 1 < columns) {
        if (nestedArray[i - 1][j + 1] === 1) {
          counter++;
        }
      }

      if (i + 1 < rows && j - 1 >= 0) {
        if (nestedArray[i + 1][j - 1] === 1) {
          counter++;
        }
      }

      if (i + 1 < rows && j + 1 < columns) {
        if (nestedArray[i + 1][j + 1] === 1) {
          counter++;
        }
      }

      if (i + 1 < rows) {
        if (nestedArray[i + 1][j] === 1) {
          counter++;
        }
      }
    }
  }
  return counter;
};

function getNextTable() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const neighbors = neighborCount();

      if (nestedArray[i][j] === 1) {
        if (neighbors < 2) {
          nextTable[i][j] = 0;
        } else if (neighbors === 2 || neighbors === 3) {
          nextTable[i][j] = 1;
        } else if (neighbors > 3) {
          nextTable[i][j] = 0;
        }
      } else if (nestedArray[i][j] === 0) {
        if (neighbors === 3) {
          nextTable[i][j] = 1;
        }
      }
    }
  }
}
function updatenestedArray() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      nestedArray[i][j] = nextTable[i][j];

      nextTable[i][j] = 0;
    }
  }
}
function updateWorld() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const cell = document.getElementById(`${i}_${j}`);
      if (nestedArray[i][j] === 0) {
        cell.setAttribute("class", "dead");
      } else {
        cell.setAttribute("class", "alive");
      }
    }
  }
}
function evolve() {
  getNextTable();
  updatenestedArray();
  updateWorld();
  if (started) {
    timer = setTimeout(evolve, evolutionSpeed);
  }
}
function startGame() {
  if (!started) {
    started = true;
    evolve();
  }
}
start.addEventListener("click", startGame());
function stopGame() {
  clearTimeout(timer);
}
stop.addEventListener("click", stopGame());

window.onload = () => {
  htmlGenerator(rows, columns);
  gameTable(rows, columns);
};
