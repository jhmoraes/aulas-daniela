/* 

1) Crie um array de números que contenha 8 números.
Com este array e utilizando o `map()`, retorne os arrays abaixo:

    a. Retorne um novo array contendo os números multiplicados por 5. Guarde esse array dentro de uma variável `const quintuplos`.
    b. Retorne um novo array contendo os números divididos por 2. Guarde esse array dentro de uma variável `const metades`.


========================================================================================


2) Utilizando o array **produtos** disponibilizado, retorne um novo array com os **nomes** dos produtos da categoria **limpeza**.

Observe que cada elemento do array **produtos** é um objeto com as propriedades *nome*, *preco* e *categoria*.



========================================================================================

3) Ainda utilizando o array de produtos, crie as funções abaixo.

    a) Crie uma função que seja capaz de buscar e retornar um produto com todas as suas informações. A busca deve funcionar mesmo utilizando letras maiusculas e minusculas.
    
    b) Crie uma função que seja capaz de armazenar os itens que o usuário deseja comprar em um novo array, utilize a função de buscar criada no item anterior como callback.

    c) Crie uma função que realize a soma de todos os produtos que o usuário deseja comprar.
    
    d) Crie uma função que seja capaz de excluir um item do array com os produtos que o usuário iria comprar.
    
    e)Crie uma função que imprima no console uma lista com todos os itens, preço e quantidade de cada item no array e  mostre o valor total.

    Exemplo:

    Extrato:
    Leite 2x 2.99
    Vinho Tinto 1x 55.00
    Total = 57.99

*/


const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó", categoria: "Limpeza", preco: 10.80 }
]

//a)

let carrinho = []

const buscarItem = (item) =>{

    const itemFiltrado = produtos.filter((produto)=> {
        if(produto.nome.toLowerCase().includes(item.toLowerCase())){
            return produto
        }
    })
    
    return itemFiltrado
}

const comprar = (item) =>{

    const itemCompra = buscarItem(item)

    if(itemCompra){
        carrinho.push(itemCompra[0])
    }
    
}

comprar('leit')
comprar('leit')
comprar('leit')
comprar('sab')
comprar('gua')
comprar('gua')
comprar('det')
comprar('bana')
comprar('bana')
comprar('bana')
comprar('bana')
comprar('bana')
comprar('bana')
comprar('bana')
comprar('bana')
comprar('bana')



console.log(carrinho);

const excluirItem = (item) =>{

    const novoCarrinho =  carrinho.filter((mercadoria)=> mercadoria.nome.toLowerCase() !== item.toLowerCase())
    carrinho = novoCarrinho
}

excluirItem('leite')

//====================================================

const excluirDuplicadas = () =>{

    const contadorNomes = {};
    
    // Contar as ocorrências de cada nome
    carrinho.forEach(item => {
        const nome = item.nome;
        if (contadorNomes[nome]) { //a propriedade nome existe? o nome da propriedade será o nome do item
            contadorNomes[nome]++;
        } else {
            contadorNomes[nome] = 1;
        }
    });

    console.log(contadorNomes);

    // Criar um novo array com a propriedade quantidade
    const resultado = carrinho.map(item => {
        return {
            nome: item.nome,
            categoria: item.categoria,
            preco: item.preco,
            quantidade: contadorNomes[item.nome]
        };
    });
    console.log(resultado);//tudo duplicado

    // Remover duplicatas mantendo a primeira ocorrência
    const resultadoSemDuplicatas = resultado.filter((item, index, self) =>
        
        // compara o index
        // self é o mesmo array do resultado que está todo duplicado
        // findIndex passa por cada elemento, se os nomes forem iguais 
        index === self.findIndex(t => (
            t.nome === item.nome 
            //console.log(t.nome === item.nome) 
            //retorna true ou false
            //se for true o vai para o filtro
        ))
    );
    // o resultado do filter é um array sem repetição
    return resultadoSemDuplicatas;
}

console.log(excluirDuplicadas());


//===========================================================================

const imprimir = () =>{

    const arrayImpressao = excluirDuplicadas()
    let lista = 'Extrato:'
    let valorTotal = 0

    for (const item of arrayImpressao) {
        let valorItem = 0
        lista += `\n${item.nome} ${item.quantidade}x ${item.preco} `
        if(item.quantidade > 1){
            valorItem = item.preco * item.quantidade
        }else{
            valorItem = item.preco
        }

        valorTotal += valorItem
    }

    lista += `\nTotal da compra = ${valorTotal.toFixed(2)} `

    console.log(lista);
}

imprimir()

