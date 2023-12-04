const { splitAmount } = require("./coin-problem");

describe("splitAmount function", () => {
  test("should split 2.34 into [2, 0.2, 0.1, 0.02, 0.02]", () => {
    const result = splitAmount(2.34);
    expect(result).toEqual([2, 0.2, 0.1, 0.02, 0.02]);
  });
});
