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

const htmlGenerator = (parameterRow, parameterColumn) => {
  const gameBoard = document.querySelector(".game-container");
  const board = document.createElement("div");
  board.className = "boardDiv";
  let rowCount = 0;
  let cellCount = 0;
  let ids = 0;
  let row;
  let cell;
  for (let i = 0; i < parameterRow; i++) {
    row = document.createElement("div");
    row.className = `rowDiv ${i}`;
    rowCount++;
    for (let j = 0; j < parameterColumn; j++) {
      ids++;
      cellCount++;
      cell = document.createElement("div");
      cell.className = `cellDiv ${i}`;
      cell.classList.add(ids);
      row.appendChild(cell);
    }
    board.appendChild(row);
  }
  gameBoard.appendChild(board);
  return { rowCount, cellCount };
};

window.onload = () => htmlGenerator(40, 40);

const start = () => {
  htmlGenerator();
};
window.onload = start();
