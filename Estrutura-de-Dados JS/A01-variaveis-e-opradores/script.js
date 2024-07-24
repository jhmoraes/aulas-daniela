//declaração de variáveis

const nome = "juliana"
//nome = "fernanda" não posso alterar uma constante

let numero = 10 // let permite alterações
console.log(numero);

numero = 20

console.log(numero);

// -------------------------

let idadeUsuario = 40 // camelCase
idadeUsuario = "quarenta"

//-------------- TIPOS
// ------ PRIMITIVOS

const texto = "meu texto" // string
const num = 2 // number
const booleano = false // booleanos

//------ outros tipos

const retorno = undefined //indefinido
const vazio = null //vazio ou nulo

//----------- OPERADORES ---------

let somar = 1 + 3

somar = 1 + 1
somar += 2
somar -= 1
somar = 0
somar++
somar--

console.log('somar', somar);

// --- divisão

let divisao = 8 / 2
console.log('divisao', divisao);

//qual é o resto da divisão?

let resto = 53.42 % 2
console.log('resto', resto.toFixed(2));

//---- operadores relacionais

//let comparacaoIgual = 5 === 5 //valor e tipo
let comparacaoIgual = 5 === '5' //valor e tipo

//2 sinais de igual comparo valor
comparacaoIgual = 5 == 6 
console.log('igual', comparacaoIgual);

let comparacaoDiferente = 5 !== 5 //5 é diferente de 5?
comparacaoDiferente = 5 !== "5" //valor e tipo
console.log('diferente', comparacaoDiferente);

let tipoVariavel = 10
tipoVariavel = 'dez'

console.log(typeof tipoVariavel);

const num1 = 8
const num2 = 4

let resultado = num1 >= num2

console.log(resultado);

// ---- Exercícios -----

let peso = 65
const altura = 1.60

const imc = peso / (altura * altura)

console.log('imc', imc.toFixed(2));