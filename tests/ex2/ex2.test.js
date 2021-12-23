const { TestWatcher } = require("jest");
const palindrome = require("./ex2");

test("check if function is defined", () => {
  expect(palindrome).toBeDefined();
});

test("Is a palindrome", () => {
  expect(palindrome("otto")).toEqual(true);
});
test("Is not a palindrome", () => {
  expect(palindrome("friend")).toEqual(false);
});
