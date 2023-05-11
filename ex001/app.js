function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result); //dará um erro se colocarmos diretamente (phrase + n1 + n2) pois entende como se todos fossem strings, portanto é necessário criar a variável
    }
    else {
        return n1 + n2;
    }
}
var number1 = 5; // == 5.0
var number2 = 2.8;
var printResult = true;
var resultPhrase = 'Result is: ';
add(number1, number2, printResult, resultPhrase);
