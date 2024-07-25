// -----------------  Array ----------------------------

const frutas = ['banana', 'abacaxi', 'pera', 'uva']
            //    0          1          2      3
console.log('tamanho', frutas.length);
console.log(frutas);

// acessando elementos 

console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
console.log(frutas[4]); //não existe indice 4 - problema no for

// -------- adicionar elemento
// no final

frutas.push('elemFinal')
console.log(frutas);

//no inicio
frutas.unshift('elemeInicio')
console.log(frutas);

//adiciona
frutas.splice(3, 1, 'amora')
console.log(frutas);
//substitui
frutas.splice(3, 1, 'amora')
console.log(frutas);

// --------- remover elementos

//a partir do inidice 0 remova 2 elementos
frutas.splice(0, 2)
console.log(frutas);

// remover o ultimo elemento
frutas.pop()
console.log(frutas);

// remover o primiero elemento

frutas.shift()
console.log(frutas);

//------- Métodos de array

console.log(frutas.includes('amora'));
const retorno = frutas.includes('amora')
console.log(retorno);

// Qual indice do elemento?

console.log(frutas.indexOf('amora'));
console.log(frutas.indexOf('uva'));
console.log(frutas.indexOf('maracuja')); // não existe -1

// array em string

const frutasString = frutas.join()
console.log(frutasString);

const frutasString1 = frutas.join('-')
console.log(frutasString1);

// ------ string em array

const frase = 'Eu amo programação'
const fraseArray =  frase.split(' ')//quero separar onde tem espaço
console.log(fraseArray);

console.log(frutasString1.split('-'));

// ------ ordenação

const nomes = ['Barbara', 'Carla', 'Alicia']
console.log(nomes.sort());

const numeros = [1, 5, 3, 2, 4];
console.log(numeros.sort());

const numeros1 = [1, 16, 10, 20, 2]
console.log(numeros1.sort());
console.log(numeros1.sort((a, b)=> a - b)); // crescente
console.log(numeros1.sort((a, b)=> b - a)); // decrescente