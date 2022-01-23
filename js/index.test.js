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

const cellBlocks = [
  [[1], [1], [0]],
  [[1], [1], [1]],
  [[0], [0], [0]],
];
const logics = (cellBlock) => {
  for (let i = 1; i < cellBlock.length; i++) {
    for (let j = 1; cellBlock[0][0].length; j++) {
      const cell = cellBlock[i][j];
      let neighbors =
        cell[i - 1][j - 1] +
        cell[i - 1][j] +
        cell[i - 1][j + 1] +
        cell[i][j - 1] +
        cell[i][j + 1] +
        cell[i + 1][j - 1] +
        cell[i + 1][j] +
        cell[i + 1][j + 1];

      if (cell[i - 1][j - 1])
        if (neighbors < 2 || neighbors > 3) {
          cell[i][j] = 0;
          neighbors = 0;
        }
    }
  }
  console.table(cellBlock(cellBlocks));
};
logics();
console.table(gameTable(3, 3));
describe("Given a tableGenerator funtion", () => {
  describe("When it recieves the value of 3 and 3", () => {
    test("Then is hould return a table of 3 rows & 3 columns", () => {
      const expectedResult = [
        [[0], [0], [0]],
        [[0], [0], [0]],
        [[0], [0], [0]],
      ];
      const columnNumber = 3;
      const rowNumber = 3;

      const tableGenerator = gameTable(columnNumber, rowNumber);

      expect(tableGenerator).toEqual(expectedResult);
    });
  });
});

describe("Given a logics function", () => {
  describe("When it recieves a nested array with a living pattern", () => {
    test("Then is should return a modified nested array", () => {
      const expectedResult = [
        [[1], [1], [0]],
        [[1], [1], [1]],
        [[0], [0], [0]],
      ];

      const cellBlocksTest = [
        [[1], [1], [0]],
        [[1], [0], [1]],
        [[0], [0], [0]],
      ];

      const tableCheck = gameTable(cellBlocksTest);

      expect(tableCheck).toEqual(expectedResult);
    });
  });
});
