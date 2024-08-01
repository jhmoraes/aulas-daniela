//CALLBACK

//const brinquedos = ['bola', 'boneca']

const totalDeBrinquedos = (array) => {
    return `Existem ${array.length} brinquedos no estoque!`
} 

const funcMensagem = (array) => {
    return `Existem ${array.length} brinquedos`
}
//Opção 1 para usar callback
/* const adicionarBrinquedo = (brinquedo) => {

    !brinquedo ?
        console.log('Informe um brinquedo') :
        brinquedos.push(brinquedo)

    //const retorno = totalDeBrinquedos(brinquedos)
    //return retorno

    //forma mais curta
    return totalDeBrinquedos(brinquedos)
} */


//Opção 2 para usar callback
const adicionarBrinquedo = (brinquedo, func) => {

    !brinquedo ?
        console.log('Informe um brinquedo') :
        brinquedos.push(brinquedo)

    return func(brinquedos)
}

console.log(adicionarBrinquedo('carrinho', funcMensagem))

//======================================

//MAP -- retorna um array com a mesma quantidade

//const arrayNumeros = [3, 8, 4, 5, 7, 10, 20, 2]

//multiplicar assray por 3

arrayNumeros.map(()=>{})
const arrayMultiplicado = arrayNumeros.map((cadaElemento) => cadaElemento * 3)

const arrayMultiplicado1 = arrayNumeros.map((cadaElemento) => {
    if (cadaElemento >= 10) {
        return cadaElemento * 3
    }
})

//console.log(arrayMultiplicado);

const brinquedosMaiusculo = brinquedos.map((cadaElemento) => { return cadaElemento.toUpperCase() })

//console.log(brinquedosMaiusculo);

//===============================================

// FILTER 
// Retornar um novo array, com os elementos que passaram em uma condição

const arrayNumeros = [3, 8, 4, 5, 7, 10, 20, 2]

const arrayNFiltrado = arrayNumeros.filter((cadaElemento) => cadaElemento>=10)
const arrayFiltradoMultiplicado = arrayNFiltrado.map((cadaElemento)=>cadaElemento*3)

//console.log(arrayFiltradoMultiplicado);

const arrayPares = arrayNumeros.filter((numero)=> numero % 2 === 0 )
//console.log(arrayPares);

//--------exclusão de elemento do array com filter-----------------


let brinquedos = ['bola', 'boneca', 'carrinho']

const brinquedosFiltrado = brinquedos.filter((cadaBrinquedo)=> cadaBrinquedo !== 'boneca')

const brinquedosFiltrado2 = brinquedosFiltrado.filter((cadaBrinquedo)=> cadaBrinquedo !== 'carrinho')

console.log(brinquedos);
console.log(brinquedosFiltrado);
console.log(brinquedosFiltrado2);

brinquedos = brinquedosFiltrado2

console.log('brinquedos', brinquedos)


//================= Exercício Feit em aula ================


const mercado = [
    {
        item:'macarrão',
        valor: 4.80
    },
    {
        item:'feijão',
        valor: 6.30
    },
    {
        item:'arroz',
        valor: 5.00
    }
]

let carrinhoDeCompras = []



const buscarItem = (item) =>{

    const itemFiltrado = mercado.filter((mercadoria)=> {
        if(mercadoria.item === item){
            return mercadoria
        }
    })
    
    return itemFiltrado
}



const comprar = (mercadoria) =>{

    const itemCompra = buscarItem(mercadoria)

    if(itemCompra){
        carrinhoDeCompras.push(itemCompra[0])
    }
}

comprar('feijão')
comprar('feijão')
comprar('arroz')
comprar('macarrão')

console.log(carrinhoDeCompras);


const excluirItem = (item) =>{
    const novoCarrinho =  carrinhoDeCompras.filter((mercadoria)=> mercadoria.item !== item)

    //console.log(novoCarrinho);

    carrinhoDeCompras = novoCarrinho
}



const calcularCompras = (compras) =>{
    let valorTotal = 0

    for (const item of compras) {
        valorTotal += item.valor
    }

    return valorTotal
}


console.log('Total da Compra', calcularCompras(carrinhoDeCompras));

excluirItem('arroz')
console.log(carrinhoDeCompras);
console.log('Total da Compra', calcularCompras(carrinhoDeCompras));




