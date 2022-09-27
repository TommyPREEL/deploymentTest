import { Calculator } from "../class/calculator";

describe("Calculator", () => {
  it("should add two numbers", () => {
    expect(Calculator.add(1, 1)).toBe(2);
  });

  it("should substract two numbers", () => {
    expect(Calculator.sub(1, 1)).toBe(0);
  });

  it("should multiply two numbers", () => {
    expect(Calculator.mul(5, 2)).toBe(10);
  });

  it("should divide two numbers", () => {
    expect(Calculator.div(10, 2)).toBe(5);
  });
});
