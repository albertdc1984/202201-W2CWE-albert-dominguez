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

const gameFive = gameTable(5, 5);
console.log(gameFive);

const logics = () => {
  for (let i = 1; i < gameFive[0].length; i++) {
    for (let j = 1; gameFive[0][0].length; j++) {
      if (gameFive[i][j + 1] === 0 && gameFive[i - 1][j] === 0) {
        gameFive[i][j] = 1;
      }
    }
  }
  return console.table(gameFive);
};
logics();
console.table(gameTable(3, 3));
describe("Given a tableGenerator funtion", () => {
  describe("When it recieves the value of 3 and 3", () => {
    test("Then is hould return a table of 3 rows & 3 columns", () => {
      // Arrange
      const expectedResult = [
        [[0], [0], [0]],
        [[0], [0], [0]],
        [[0], [0], [0]],
      ];
      const columnNumber = 3;
      const rowNumber = 3;
      // Act
      const tableGenerator = gameTable(columnNumber, rowNumber);
      // Assert
      expect(tableGenerator).toEqual(expectedResult);
    });
  });
});
