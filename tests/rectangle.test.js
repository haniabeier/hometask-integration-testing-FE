//import { getRectanglePerimeter, getRectangleArea, getRectangleInfo } from "../js/rectangle";
const { getRectanglePerimeter, getRectangleArea, getRectangleInfo } = require("../js/rectangle");

test("should properly count the rectangle's perimeter", () => {
  const perimeter = getRectanglePerimeter(25, 5);
  expect(perimeter).toBe(60);
})

test("should properly count the rectangle's area", () => {
  const area = getRectangleArea(25, 5);
  expect(area).toBe(125);
})

test("should return 0 if one of the dimensions is 0", () => {
  const area = getRectangleArea(13, 0);
  expect(area).toBe(0);
})

test("should generate a proper description", () => {
  const info = jest.spyOn(console, 'log');
  getRectangleInfo(25, 5);
  expect(info).toHaveBeenCalledWith("The perimeter of a rectangle is 60 and the area is 125");
})