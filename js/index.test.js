const cellBlocks = [
  [1, 1, 0],
  [1, 1, 1],
  [0, 0, 0],
];

const clear = (cellB) => {
  for (let i = 0; i < cellB.length; i++) {
    for (let j = 0; j < cellB[i].length; j++) {
      cellBlocks[i][j] = 0;
    }
  }
  return console.log(cellBlocks);
};

clear();

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

const logics = () => {
  const neighbors = [];

  for (let i = 1; i < cellBlocks.length; i++) {
    for (let j = 1; cellBlocks.length; j++) {
      const cell = cellBlocks[i][j];
      if (
        cell[i - 1][j - 1] ||
        cell[i - 1][j] ||
        cell[i - 1][j + 1] ||
        cell[i][j - 1] ||
        cell[i][j + 1] ||
        cell[i + 1][j - 1] ||
        cell[i + 1][j] ||
        cell[i + 1][j + 1]
      ) {
        neighbors.push(cell[i][j]);
      }

      if (cell[i - 1][j - 1])
        if (neighbors.length < 2 || neighbors.length > 3) {
          cell[i][j] = 0;
        } else {
          cell[i][j] = 1;
        }
    }
  }
  console.table(cellBlocks);
};

logics();

describe("Given a logics function", () => {
  describe("When it recieves a nested array with a living pattern", () => {
    test("Then is should return a modified nested array", () => {
      const expectedResult = [
        [1, 1, 0],
        [1, 1, 1],
        [0, 0, 0],
      ];

      const cellBlocksTest = [
        [1, 1, 0],
        [1, 0, 1],
        [0, 0, 0],
      ];

      const tableCheck = gameTable(cellBlocksTest);

      expect(tableCheck).toEqual(expectedResult);
    });
  });
});

describe("Given a clear function", () => {
  describe("When it recieves a nested array with a 'living pattern'", () => {
    test("Then is should return a cleared nested array", () => {
      const expectedResult = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];

      const cellBlocksTest = [
        [1, 1, 0],
        [1, 0, 1],
        [0, 0, 0],
      ];

      const tableCheck = clear(cellBlocksTest);

      expect(tableCheck).toEqual(expectedResult);
    });
  });
});
