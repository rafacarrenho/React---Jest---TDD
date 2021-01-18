import { filter } from "./filter";

it("filter should be a function", () => {
  expect(typeof filter).toBe("function");
});

it("filter([1, 2]) should return [1, 2]", () => {
  expect(filter([1, 2])).toStrictEqual([1, 2]);
});

it("filter([1, 2], item => item >= 2) should return [2]", () => {
  expect(filter([1, 2], (item) => item >= 2)).toStrictEqual([2]);
});

it("filter([3,4], item => item === 3) should return [4]", () => {
  expect(filter([3, 4], (item) => item === 3)).toStrictEqual([3]);
});

it("filter([1, 2, 3, 4, 8, 6], (item) => item > 2 && item < 5) should return [3, 4]", () => {
  expect(
    filter([1, 2, 3, 4, 8, 6], (item) => item > 2 && item < 5)
  ).toStrictEqual([3, 4]);
});

it("filter() should return []", () => {
  expect(filter()).toStrictEqual([]);
});
