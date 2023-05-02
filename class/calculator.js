"use strict";
exports.__esModule = true;
exports.Calculator = void 0;
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    /**
     * Add two numbers
     * @param a {number} - The first number
     * @param b {number} - The second number
     * @returns result of addition
     */
    Calculator.add = function (a, b) {
        return a + b;
    };
    /**
     * Subtract two numbers
     * @param a {number} - The first number
     * @param b {number} - The second number
     * @returns result of subtraction
     */
    Calculator.sub = function (a, b) {
        return a - b;
    };
    /**
     * Multiply two numbers
     * @param a {number} - The first number
     * @param b {number} - The second number
     * @returns result of multiplication
     */
    Calculator.mul = function (a, b) {
        return a * b;
    };
    /**
     * Divide two numbers
     * @param a {number} - The first number
     * @param b {number} - The second number
     * @returns result of division
     */
    Calculator.div = function (a, b) {
        return a / b;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
