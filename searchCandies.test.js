const searchCandies = require("./searchCandies");

describe("searchCandies", () => {
  it("searches for a candy starting with Ma with a maximum price of 10", () => {
    expect(searchCandies("Ma", 10)).toStrictEqual(["Mars", "Maltesers"]);
  });
  it("searches for a candy starting with Ma with a maximum price of 2", () => {
    expect(searchCandies("Ma", 2)).toStrictEqual(["Mars"]);
  });
  it("searches for a candy starting with S with a maximum price of 10", () => {
    expect(searchCandies("S", 10)).toStrictEqual([
      "Skitties",
      "Skittles",
      "Starburst",
    ]);
  });
  it("searches for a candy starting with S with a maximum price of 4", () => {
    expect(searchCandies("S", 4)).toStrictEqual(["Skitties", "Skittles"]);
  });
});
