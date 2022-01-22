const gameTable = (numberOfColumns, numberOfRows) => {
  const nestedArray = [];
  for (let i = 0; i < numberOfRows; i++) {
    nestedArray.push([]);
  }

  for (let i = 0; i < numberOfColumns; i++) {
    for (let j = 0; j < numberOfRows; j++) {
      nestedArray[j].push([]);
    }
  }
  console.table(nestedArray);
  return nestedArray;
};

describe("Given a tableGenerator funtion", () => {
  describe("When it recieves the value of 3 and 3", () => {
    test("Then is hould return a table of 3 rows & 3 columns", () => {
      // Arrange
      const expectedResult = [
        [[], [], []],
        [[], [], []],
        [[], [], []],
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
