const htmlGenerator = (parameterRow, parameterColumn) => {
  const gameBoard = document.querySelector(".game-container");
  const board = document.createElement("table");
  let ids = 0;
  for (let i = 0; i < parameterRow; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < parameterColumn; j++) {
      ids++;
      const column = document.createElement("td");
      column.setAttribute("dead", true);
      column.classList.add(ids);
      row.appendChild(column);
    }
    board.appendChild(row);
  }
  gameBoard.appendChild(board);
};

window.onload = () => htmlGenerator(40, 40);
