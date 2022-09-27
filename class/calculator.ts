export class Calculator {
  /**
   * Add two numbers
   * @param a {number} - The first number
   * @param b {number} - The second number
   * @returns result of addition
   */
  public static add(a: number, b: number) {
    return a + b;
  }

  /**
   * Subtract two numbers
   * @param a {number} - The first number
   * @param b {number} - The second number
   * @returns result of subtraction
   */
  public static sub(a: number, b: number) {
    return a - b;
  }

  /**
   * Multiply two numbers
   * @param a {number} - The first number
   * @param b {number} - The second number
   * @returns result of multiplication
   */
  public static mul(a: number, b: number) {
    return a * b;
  }

  /**
   * Divide two numbers
   * @param a {number} - The first number
   * @param b {number} - The second number
   * @returns result of division
   */
  public static div(a: number, b: number) {
    return a / b;
  }
}
