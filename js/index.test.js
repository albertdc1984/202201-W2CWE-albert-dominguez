const gameTable = (numberOfColumns) => {
  const nestedArray = [];
  for (let i = 0; i < numberOfColumns; i++) {
    nestedArray.push([]);
  }
  return nestedArray;
};

describe("Given a tableGenerator funtion", () => {
  describe("When we it recieves the value 1 and 3", () => {
    test("Then is hould return a nested 3 nested arrays", () => {
      // Arrange
      const expectedResult = [[], [], []];
      const columnNumber = 3;
      // Act
      const tableGenerator = gameTable(columnNumber);
      // Assert
      expect(tableGenerator).toEqual(expectedResult);
    });
  });
});
