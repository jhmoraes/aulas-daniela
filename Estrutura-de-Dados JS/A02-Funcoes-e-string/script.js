// Tipos de Função

function funcaoNomeada() {
    // corpo da função
}

const funcaoArrow = () => {
    //corpo da função
}

// função anonima 
() => { return null }
() => null

// chamando uma função

funcaoNomeada() // chamada e executada

// exemplo ---------------------------
// parametro
const alertar = (nome) => {
    alert("Olá" + " " + nome)
}

//alertar('Juliana') //um argumento


// passagem por parametro

const soma = 0 // variável global

const somar = (num1, num2) => {

    //variável locar
    const soma = num1 + num2

    console.log(soma); //sem retorno
}

/* 

exemplo de chamada de função sem retorno

const teste = somar(75, 40)
console.log(teste); 

*/

// Função com retorno
                // porta de entrada 
/* const multiplicar = (num1, num2) =>{

    const mult = num1 * num2

    return mult // coloca o resultado para fora
} */

const multiplicar = (num1, num2) =>{
    return num1 * num2
}

//console.log(multiplicar(8, 7))
const retorno = multiplicar(8, 7)
console.log(retorno);

//-------------------------- string 
        //    0123456
const nome = 'Juliana'
nome.length // tamanho da string

console.log('tamanho da string', nome.length);
console.log(nome[6]);

console.log('minusculo', nome.toLowerCase());
console.log('minusculo', nome.toUpperCase());

const frase = ' Eu vi um arco-iris '

console.log(frase);
console.log(frase.trim());
console.log(frase.replaceAll(' ', ''));
console.log(frase.replaceAll('i', 'a'));
console.log(frase.replace('arco-iris', 'gatinho'));

console.log(frase.includes('Eu')); // retorna um booleano

// ----- Template String

let sobremesa = 'bolo de chocolate'
let comidaFavorita = 'bife'

const texto = `Minha comida favorita é ${comidaFavorita} e a sobremesa é ${sobremesa}.`

console.log(texto);

//--------- exercícios

// crie uma função nomeada que calcule e retorne o IMC. mostre no console
// crie uma função que receba um numero e retorne 15% dele
// crie uma função que receba a idade de um usuario, verifique se é maior de idade e retorne um booleno 
// crie uma função que receba um numero, uma potencia e retorne o resultado
// crie uma função que receba um salário e retone o salário com mais 40%
// crie uma função que receba um nome, idade e altura. imprima no console a frase : Me chamo ----- tenho ---- anos e ---- de altura. 


