interface IAdder {
    add(arg: number, ...args:number[]):number;
}

interface ISubstractor {
    substract(arg: number, ...args:number[]):number;
}

export interface ICalculator extends IAdder, ISubstractor {
    multiply(arg: number, ...args:number[]):number;
    divide(arg: number, ...args:number[]):number;
}