import { sum } from "./sum";

test("sum should be a function", () => {
  expect(typeof sum).toBe("function");
});

test("sum(1, 6) should return 7", () => {
  expect(sum(1, 6)).toBe(7);
});

test("sum(6, 6) should return 12", () => {
  expect(sum(6, 6)).toBe(12);
});
