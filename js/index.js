const rows = 20;
const columns = 20;
const nestedArray = [];
const nextTable = [];
const started = false;
let timer;
const evolutionSpeed = 1000;
const randomN = () => {
  if (Math.random() >= 0.5) {
    return 1;
  }
  return 0;
};
const gameTable = (numberOfcolumns, numberOfRows) => {
  for (let i = 0; i < numberOfRows; i++) {
    nestedArray.push([]);
    nextTable.push([]);
  }

  for (let i = 0; i < numberOfcolumns; i++) {
    for (let j = 0; j < numberOfRows; j++) {
      const random = randomN();
      nestedArray[i].push(random);
      nextTable[i].push(0);
    }
  }
  console.table(nestedArray);
  console.table(nextTable);
  return nestedArray;
};

function cellStatus() {
  const location = this.id.split("_");
  const rowLocation = location[0];
  const columnLocation = location[1];
  if (nestedArray[rowLocation][columnLocation] === 0) {
    this.setAttribute("class", "dead");
  }
  if (nestedArray[rowLocation][columnLocation] === 1) {
    this.setAttribute("class", "alive");
  }
  if (this.className === "alive") {
    this.setAttribute("class", "dead");
    nestedArray[rowLocation][columnLocation] = 0;
  } else {
    this.setAttribute("class", "alive");
    nestedArray[rowLocation][columnLocation] = 1;
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
      if (nestedArray[i][j] === 1) {
        cell.setAttribute("class", "alive");
      }
    }
    board.appendChild(row);
  }

  gameBoard.appendChild(board);
  return board;
};
const neighborCount = (i, j) => {
  let counter = 0;
  if (i >= 1 && i <= rows - 1) {
    if (j >= 1 && j <= columns - 2) {
      debugger;
      if (nestedArray[i - 1][j - 1] === 1) {
        counter++;
      }
      if (nestedArray[i - 1][j] === 1) {
        counter++;
      }
      if (nestedArray[i - 1][j + 1] === 1) {
        counter++;
      }
      if (nestedArray[i][j - 1] === 1) {
        counter++;
      }
      if (nestedArray[i][j + 1] === 1) {
        counter++;
      }
      if (nestedArray[i + 1][j - 1] === 1) {
        counter++;
      }
      if (nestedArray[i + 1][j] === 1) {
        counter++;
      }
      if (nestedArray[i + 1][j + 1] === 1) {
        counter++;
      }
    }
  }

  return counter;
};

function getNextTable() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const neighbors = neighborCount(i, j);

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
  const startButton = document.querySelector(".start-button");
  startButton.onclick = evolve();
}

function stopGame() {
  const stopButton = document.querySelector(".stop-button");
  stopButton.onclick = clearTimeout(timer);
}

window.onload = () => {
  gameTable(rows, columns);
  htmlGenerator(rows, columns);
  getNextTable();
  startGame();
  stopGame();
};
