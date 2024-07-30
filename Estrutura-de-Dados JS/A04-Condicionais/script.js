// IF

//const valor = true

if(valor){ // resultado precisa ser uma verdade
    console.log('verdadeiro');
}else{ // caso de falsidade
    console.log('falsidade');
} 

//=================

//const idade = 3

 if(idade >= 18){ // V
    console.log('é de maior');
}else{
    console.log('é de menor');
}

// else / if 

if (idade >= 18) { // V
    console.log('é de maior')
} else if (idade <= 2) {
    console.log('é um bebe')
} else {
    console.log('é de menor')
}

// if com operadores lógicos 
// && -> tudo for verdade

// idoso 65 - 
// adulto 19 - 
// adolescente 12 e 18 - 
// criança 3 e 11 - 
// bebe menor que 2

const idade = 10

if (idade >= 65) {
    console.log('Idoso')
} else if (idade >= 19) {
    console.log('adulto');
    //        V        E    V  = verdadeiro
} else if (idade >= 12 && idade <= 18) {
    console.log('adolescente');
} else if (idade >= 3 && idade <= 11) {
    console.log('criança');
} else {
    console.log('bebe');
}


// || -> basta que 1 item seja verdade

const valor = 10

if (valor === 3 || valor === 5) {
    console.log('entrou no if');
} else { //falsidade
    //console.log('entrou no else');
}

// ! -> negação

//const resultado = true 

if(!resultado){ //verificando a falsidade - negando
    console.log('o resultado do if é falso');
}else{
    console.log('o resultado do if é verdadeiro');
}
// undefined - 0 - null - '' (falsidade)

const resultado = true

if(!resultado){ 
    console.log("undefined - 0 - null - ''");
}else{
    console.log('entrou no else');
}

console.log(Boolean(null)); // verificar o booleano de algum valor

// TERNÁRIO
// condição ? expre1 : expre2
resultado ? console.log('verdade') : console.log('falso');

idade >= 18 ? console.log('de maior') : console.log('de menor');

//Switch-Case

const opcao = 2
let resultadoConta = 0

switch (opcao) {
    case 1:
        resultadoConta = 300 * 0.05
        console.log('fazer opção 1 =>', resultadoConta);
        break;
    case 2:
        resultadoConta = 300 * 0.15
        console.log('fazer opção 2 =>', resultadoConta);
        break;
    case 3:
        resultadoConta = 300 * 0.25
        console.log('fazer opção 3 =>', resultadoConta);
        break;
    default:
        console.log('informe uma opção válida');
    
}
