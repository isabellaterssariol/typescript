"use strict";
//string
let nome = 'João';
console.log(nome);
// nome = 28
//numbers
let idade = 27;
//idade = 'Ana' --> dará um erro
idade = 27.5;
console.log(idade);
//boolean
let possuiHobbies = false;
// possuiHobbies = 1  --> dará um erro
console.log(possuiHobbies);
// tipos explícitos 
let minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = '27' --> se eu não tivesse definido 'number' ali em cima, eu poderia colocar essa nova inicialização 
// arrays
let hobbies = ['Cozinhar', 'Praticar Esportes'];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
// hobbies = 100 -> dará um erro pois não é do tipo array
console.log(hobbies);
// tuplas
let endereco = ['Av Principal', 50, 'Bloco D'];
endereco = ['Rua Importante', 1260, 'Bloco C'];
// enums --> dita valores prévios 
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Laranja"] = 11] = "Laranja";
    Cor[Cor["Amarelo"] = 12] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
;
let minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
// any -> evitar pois volta ao cenário do JS
let carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
// functions
function retornaMeuNome() {
    return nome;
    //return minhaIdade -> não dará certo pois não é uma string
}
console.log(retornaMeuNome());
function digaOi() {
    console.log('Oi');
    //return minhaIdade -> a função não deve retornar nada então independente do console.log ela não irá ter retorno no console
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
//console.log(multiplicar(2, 'Bia'))
console.log(multiplicar(4, 7));
// tipo função
let calculo;
// calculo = digaOi
// calculo()
calculo = multiplicar;
console.log(calculo(5, 6));
// objetos 
let usuario = {
    nome: 'João',
    idade: 27
};
console.log(usuario);
usuario = {
    idade: 31,
    nome: 'Maria'
};
console.log(usuario);
