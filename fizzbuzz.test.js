describe("fizzbuzz", () => {
  it("returns Fizz when given 3", () => {
    let fizzbuzz = require("./fizzbuzz");
    expect(fizzbuzz(3)).toBe("Fizz");
  });
  it("returns Buzz when given 5", () => {
    let fizzbuzz = require("./fizzbuzz");
    expect(fizzbuzz(5)).toBe("Buzz");
  });
});
