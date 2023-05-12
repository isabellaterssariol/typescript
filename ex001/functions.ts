function add(n1: number, n2: number) {
    return n1 + n2
}

function printResult(num: number):void { //não irá retornar nada
    console.log('Result: ' + num)
}

printResult(add(5, 12))

let combineValues: (a: number, b: number) => number;

combineValues = add;
//combineValues = printResult;
//combineValues = 5;

console.log(combineValues(8, 8))



let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
}

function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code};
}

generateError('An error occurred', 500);