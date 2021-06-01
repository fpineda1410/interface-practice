"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (num1, num2) {
        return num1 + num2;
    };
    Calculator.prototype.substract = function (num1, num2) {
        return num1 - num2;
    };
    Calculator.prototype.multiply = function (num1, num2) {
        return num1 * num2;
    };
    Calculator.prototype.divide = function (num1, num2) {
        return num1 / num2;
    };
    Calculator.prototype.another = function (num1, num2) {
        return 1;
    };
    return Calculator;
}());
var calculator = new Calculator();
function performCalculations(calculator, num1, num2) {
    console.log(calculator.add(num1, num2));
    console.log(calculator.substract(num1, num2));
    console.log(calculator.multiply(num1, num2));
    console.log(calculator.divide(num1, num2));
}
performCalculations(calculator, 1, 2);
