describe("add", () => {
  it("adds 2 and 2", () => {
    let add = require("./add");
    expect(add(2, 2)).toBe(4);
  });
  it("adds 5 and 3", () => {
    let add = require("./add");
    expect(add(5, 3)).toBe(8);
  });
});
