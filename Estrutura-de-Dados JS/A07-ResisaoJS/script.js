// Exercícios

const arrayProdutosVendidos = [
  {
    nome: "sanduiche",
    tipo: "vegano",
  },
  {
    nome: "batata frita",
    tipo: "vegano",
  },
  {
    nome: "sorvete",
    tipo: "não vegano",
  },
  {
    nome: "batata frita",
    tipo: "vegano",
  },
  {
    nome: "sanduiche",
    tipo: "vegano",
  },
  {
    nome: "sanduiche",
    tipo: "não vegano",
  },
  {
    nome: "sanduiche",
    tipo: "não vegano",
  },
  {
    nome: "sanduiche",
    tipo: "vegano",
  },
  {
    nome: "batata frita",
    tipo: "vegano",
  },
  {
    nome: "sorvete",
    tipo: "não vegano",
  },
  {
    nome: "sanduiche",
    tipo: "vegano",
  },
  {
    nome: "sanduiche",
    tipo: "vegano",
  },
  {
    nome: "sanduiche",
    tipo: "vegano",
  },
  {
    nome: "sanduiche",
    tipo: "não vegano",
  },
  {
    nome: "sanduiche",
    tipo: "não vegano",
  },
  {
    nome: "sorvete",
    tipo: "não vegano",
  },
];
/*

1 - Separar veganos e não veganos
====================================================================================
*/

const arrayVegano = arrayProdutosVendidos.filter((elemento, indice) => {
  console.log(indice);
  return elemento.tipo === "vegano";
});

console.log(arrayVegano);

const arrayNaoVegano = arrayProdutosVendidos.filter((elemento, indice) => {
  return elemento.tipo === "não vegano";
});

console.log(arrayNaoVegano);

const arrayBatataFrita = arrayProdutosVendidos.filter((elemento, indice) => {
  return elemento.nome === "batata frita";
});

console.log(arrayBatataFrita);

/*


2 - Apenas batata fritas

====================================================================================
 

3) Crie uma função que tem o objetivo adicionar um curso no array de cursos.

====================================================================================
*/

/*


4) Crie uma função que tem o objetivo de buscar um curso pelo nome no array de cursos. O retorno da função deve ser o objeto inteiro referente ao curso.

====================================================================================


5) Crie uma função que tem o objetivo de buscar um aluno pelo nome no array de alunos. O retorno da função deve ser o objeto inteiro referente ao aluno.


====================================================================================

6) Crie uma função que busca um curso no array de cursos e armazena o valor do curso em um array chamado carrinhoCurso. Obs.: Use callbaks


====================================================================================

7) Volte na função pagarCurso criada no exercício da aula de condicionais.
Agora a função deve: 

    a) Receber um array que deve se chamar carrinhoCursos, ele deve conter os valores dos cursos a serem comprados.
    b) Receber o número de parcelas para o pagamento.
    c) Calcular o valor total do array carrinhoCursos.
    d) Na compra de 3 cursos, aplique o deconto de 15% sobre o valor total da compra.
    e) Na compra de 2 cursos, aplique o deconto de 10% sobre o valor total da compra.
    f) Para os pagamentos à vista, aplique mais 20% de desconto sobre o valor total da compra.
    g) Como saída a função deve mostrar no console uma frase para os pagamentos a vista e outra para os pagamentos parcelados. 

    Exemplo1:
        Sua compra tem valor total de R$ 1500.00, com 20% de desconto e pagamento a vista.

    Exemplo2:
        Sua compra tem valor total de R$ 2400.50, com desconto de 15%. Parcelado em 5X de R$ 480.10

*/

const cursos = [
  {
    curso: "HTMLeCSS",
    descricao: "Aprenda HTMLeCSS do zero",
    duracao: "1 mês",
    valor: 500,
  },
  {
    curso: "Javascript",
    descricao: "Aprenda javascript do zero",
    duracao: "2 meses",
    valor: 900,
  },
  {
    curso: "APIsRest",
    descricao: "Aprenda APIsRest do zero",
    duracao: "6 meses",
    valor: 2000,
  },
];

const alunos = [
  {
    aluno: "Marcia Andrade",
    idade: 20,
    turma: "js202401",
    curso: "Javascript",
    valor: 900,
    nParcelas: 9,
    desconto: false,
    parcelas: 100,
  },
  {
    aluno: "Tereza Soares",
    idade: 18,
    turma: "ap202402",
    curso: "APIsRest",
    valor: 2000,
    nParcelas: 4,
    desconto: false,
    parcelas: 500,
  },
  {
    aluno: "Leonidas Carmo",
    idade: 29,
    turma: "hc202401",
    curso: "HTMLeCSS",
    valor: 500,
    nParcelas: 1,
    desconto: true,
    parcelas: 0,
  },
];

const adicionarCurso = (curso, descricao, duracao, valor) => {
  const novoObjeto = {
    curso: curso,
    descricao: descricao,
    duracao: duracao,
    valor: valor,
  };
  cursos.push(novoObjeto);
};

adicionarCurso("React", "Aprenda rapido", "6 meses", 300);

const buscarCurso = (nome) => {
  const cursoEncontrado = cursos.find((elemento) => {
    return elemento.curso.toLowerCase().includes(nome.toLowerCase());
  });
  return cursoEncontrado;
};

const procurarAluno = (aluno) => {
  const alunoEcontrado = alunos.find((elemento) => {
    return elemento.aluno.toLowerCase().includes(aluno.toLowerCase());
  });
  return alunoEcontrado;
};

const carrinhoCurso = [];
const carrinho = (curso) => {
  const cursoEncontrado = buscarCurso(curso);
  carrinhoCurso.push(cursoEncontrado.valor);
  return carrinhoCurso;
};

carrinho("HTMl");
carrinho("Java");
carrinho("api");

const pagarCurso = (carrinhoCurso, numParcelas) => {
  console.log(carrinhoCurso, numParcelas);
  let desconto = 0;
  let valorTotal = 0;
  if (carrinhoCurso.length > 1) {
    switch (carrinhoCurso.length) {
      case 3:
        desconto = 0.15;
        break;
      case 2:
        desconto = 0.1;
        break;
      default:
        desconto = 0;
    }

    for (let i = 0; i < carrinhoCurso.length; i++) {
      valorTotal += carrinhoCurso[i];
    }
    console.log(valorTotal);
    valorTotal = valorTotal - valorTotal * desconto;
  } else {
    valorTotal = carrinhoCurso[0];
  }

  if (numParcelas <= 1) {
    valorTotal = valorTotal - valorTotal * 0.2;
    console.log(
      `Sua compra tem valor total de ${valorTotal}, com 20% de desconto e pagamento a vista.`
    );
  } else {
    console.log(
      `Sua compra tem valor total de R$ ${valorTotal}, com desconto de ${desconto}%. Parcelado em ${numParcelas} de ${
        valorTotal / numParcelas
      }`
    );
  }
};
pagarCurso(carrinhoCurso, 1);




const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Duzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Desengodurante", categoria: "Limpeza", preco: 3.3 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó", categoria: "Limpeza", preco: 10.8 },
];

const buscarProduto = (item) => {
  const produtoEncontrado = produtos.find((elemento) => {
    return elemento.nome.toLowerCase().includes(item.toLowerCase());
  })
  return produtoEncontrado
};

console.log(buscarProduto('gu'));
let carrinhoMercado = []

const adicionaProduto=(nome,categoria,preco)=>{
  const novoProduto={
    nome:nome,
    categoria:categoria,
    preco:preco,
  }
produtos.push(novoProduto)
}



const comprar = (itemAdicionado) => {
  const produto=buscarProduto(itemAdicionado)
  carrinhoMercado.push(produto)
    if (produto ){
      adicionaProduto(itemAdicionado)
    }
    
}

console.log(carrinhoMercado);
console.log(produtos);

/*



2- Crie uma função comprar que irá:
    a - adicionar um item ao array de carrinhoMercado
    b - Não é permitido ter item duplicado, a cada novo item é somado mais 1 na propriedade quantidade
    c - Caso o item não exista no carrinho, será adicionado com a quantidade igual a 1





3 - Crie uma função para exclir um item do carrinho, mas a função deve diminuir a quantidade, quando a quantidade for igual a 1 o item deve ser excluido do array.
*/
