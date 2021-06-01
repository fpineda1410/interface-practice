import {ICalculator} from "./interface";


class Calculator {

    
    add(num1: number, num2: number):number {
        return num1 + num2;
    }
    substract(num1: number, num2: number):number {
        return num1 - num2;
    }
    multiply(num1: number, num2: number):number {
        return num1 * num2;
    }
    divide(num1: number, num2: number):number {
        return num1 / num2;
    }
}

const calculator = new Calculator();

function performCalculations (calculator:ICalculator,num1: number,num2: number):void {
    console.log(calculator.add(num1,num2));
    console.log(calculator.substract(num1,num2));
    console.log(calculator.multiply(num1,num2));
    console.log(calculator.divide(num1,num2));
}

performCalculations(calculator,1,2);