/* 

1) Crie um programa que peça um número para o usuário. Com este número, o código deve imprimir a **tabuada** do número, de 1 a 10.

Exemplo com entrada: 7
Exemplo Saída no console:
1x7 = 7
2x7 = 14
3x7 = 21
4x7 = 28
5x7 = 35
6x7 = 42
7x7 = 49
8x7 = 56
9x7 = 63
10x7 = 70

====================================================================

2) Crie um array com 5 strings. Faça um programa que percorra este array e imprima as strings em ordem numérica, como no exemplo abaixo:

Exemplo de saída:
1 - Rússia
2 - Canadá
3 - China
4 - EUA
5 - Brasil

====================================================================

3) Uma pessoa analista quer conseguir ver quantos gols cada um de seus 5 atacantes marcou nas últimas 5 temporadas, e quer que você construa um código que mostre isso.

Crie um laco `for` para iterar pelo array abaixo. Itere por todos os arrays que existem dentro do array golsDaTemporada. Você deve imprimir a temporada, e o número de gols, como no exemplo abaixo:

Temporada 1: 27, 4, 20, 13, 14 - Total 78 gols
Temporada 2: 11, 15, 12, 8, 9 - Total 55 gols
...


Utilize o array abaixo para este exercício:

const golsDaTemporada = [
    [27, 4, 20, 13, 14],
    [11, 15, 12, 8, 9],
    [5, 5, 12, 16, 4],
    [20, 33, 11, 12, 19],
    [3, 3, 4, 5, 10]
]

====================================================================

4) Volte na função pagarCurso criada no exercício da aula de condicionais.
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


====================================================================

5) Crie uma função que tem o objetivo de buscar um curso pelo nome no array de cursos. O retorno da função deve ser o objeto inteiro referente ao curso.

====================================================================

6) Crie uma função que tem o objetivo de buscar um aluno pelo nome no array de alunos. O retorno da função deve ser o objeto inteiro referente ao aluno.


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
    }
]


const  alunos = [
    {
        aluno: "Marcia Andrade",
        idade: 20,
        turma: "js202401",
        curso: "Javascript",
        valor: 900,
        nParcelas: 9,
        desconto: false,
        parcelas: 100
    },
    {
        aluno: "Tereza Soares",
        idade: 18,
        turma: "ap202402",
        curso: "APIsRest",
        valor: 2000,
        nParcelas: 4,
        desconto: false,
        parcelas: 500
    },
    {
        aluno: "Leonidas Carmo",
        idade: 29,
        turma: "hc202401",
        curso: "HTMLeCSS",
        valor: 500,
        nParcelas: 1,
        desconto: true,
        parcelas: 0
    }
]