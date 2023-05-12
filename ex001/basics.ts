function add(n1: number, n2: number, showResult: boolean, phrase: string) { 
    let result = n1 + n2
    if (showResult) {
        console.log(phrase + result); //dará um erro se colocarmos diretamente (phrase + n1 + n2) pois entende como se todos fossem strings, portanto é necessário criar a variável
    } else {
    return result
    }
}

const number1 = 5; // == 5.0
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: '

add(number1, number2, printResult, resultPhrase)
