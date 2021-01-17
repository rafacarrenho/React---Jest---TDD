import { div } from "./div";

it("div should be a function", () => {
  expect(typeof div).toBe("function");
});

it("div(2,2) should return 1", () => {
  expect(div(2, 2)).toBe(1);
});

it("div(10,5) should return 1", () => {
  expect(div(10, 5)).toBe(2);
});
