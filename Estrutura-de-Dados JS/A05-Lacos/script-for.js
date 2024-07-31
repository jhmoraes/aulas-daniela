//FOR
//           0         1         2         3
const frutas = ['banana', 'maçã', 'laranja', 'goiaba']
//console.log(frutas);

for(let i=0; i < frutas.length; i++ ){
   frutas[i] = frutas[i] + ' ' +'amo'
   console.log(frutas[i]);
}

//FOR OF

//                 0         1         2         3
//const frutas = ['banana', 'maçã', 'laranja', 'goiaba']

console.log(frutas);

for (const elem of frutas) {
    console.log('for of -',elem);
}

//FOR IN

//intera sobre a propriedade de um objeto

for (const propriedade in frutas) {
    //console.log(propriedade);
}

for (const propriedade in frutas) {
    // array[indice]
   // console.log(frutas[propriedade]);
}

const carro = {
    marca: 'Ford',
    modelo: 'Fiesta',
    cor: 'Prata',
    ano: 2022
}

for (const prop in carro) {
    console.log(prop);
    
    if(prop === 'marca'){
        console.log(carro[prop]);
    }

}

//FOR + FOR

const resultado1 = [12, 14, 16, 18]
const resultado2 = [20, 22, 28, 29]
const resultado3 = [30, 34, 36, 38]
const resultado4 = [40, 42, 45, 49]



const megaSena = [resultado1, resultado2, resultado3, resultado4]

for(let i=0; i < megaSena.length; i++){
    console.log('Sorteio do resultado', i+1);

    for(let z=0; z < megaSena[i].length; z++){
        //console.log(megaSena[i][z]);
        console.log(`N sortiado = ${megaSena[i][z]}`);
    }
}

//FOR EACHT

const nomes = ['Joana', 'Mariana', 'Rafaela', 'Maria']

nomes.forEach((element)=>{
    if(element[0] === 'M'){
        element = element + ' da silva'
        
    }
    console.log(element);
})


