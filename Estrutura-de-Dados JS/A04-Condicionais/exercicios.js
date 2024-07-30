/* 

1 - Crie uma função que receba um número e verifique se ele é par ou impar

=======================================================================================

2 - Crie uma função que receba do prompt uma idade e verifique se pelas regras do Brasil pode votar.

    - O valor recebido do prompt deve ser um number, caso não seja, convertar para number
    - Regras de votação:
        Pessoas     
            A partir dos 18 anos o voto é obrigatório
            Menores de 16 anos não podem votar
            Entre 16 e 18 anos o voto é facultativo
            A partir dos 70 anos o voto é facultativo
    - Informe pelo console o tipo de eleitor: obrigatório, facultativo ou dispensado.


=======================================================================================

3 - Crie uma função chamada matricular, que adicione um novo aluno ao array de alunos. 
    Condições:
        a) A idade mínima permitida para a matricula é de 16 anos.
        b) Ao final, a função deve mostrar um relatório no console. Exemplo:

            Alunos Matriculado:
            Nome: Aluno da Silva
            Curso: Javascript
            Turma: js202401

        ATENÇÃO! -> O relatório deve obedecer a quebra de linha.


=======================================================================================



4 - Crie uma função chamada pagarCurso, essa função deve receber um objeto do array de alunos e calcule o valor a pagar, conforme as regras abaixo:
    a) Calcular o valor das parcelas
    b) Aplicar 10% de desconto caso a propriedade referente ao desconto esteja true.
    
    Como saída, a função deve mostrar no console uma frase que informe:
        - O valor total do curso, se houver desconto, mostre o valor com desconto.
        - A quantidade de parcelas e o valor da parcela.

        Exemplo de mensagem para valor com desconto: 
        O valor do pagamento para o curso Javascript é de R$ 810.00, com 10% de desconto.

        Exemplo de mensagem para valor sem desconto: 
        O valor do pagamento para o curso Javascript é de R$ 900.00, parcelado em 3x de R$ 300.00

        
=======================================================================================



5 - Crie uma função chamada compararCurso, que receba um array com os valores dos cursos.
    A função deve:
        a) se o array possuir os valores de até 2 cursos, informe que o desconto é de  10% sob o valor total da compra.
        b) se o array possuir os valores de até 3 cursos, informe que o desconto é de  15% sob o valor total da compra.

    ** Para esse exercício utilize o switch-case **



=======================================================================================



6 - Crie uma função que receba um objeto com 3 propriedade: uma idade, um booleano que responde se a pessoa terminou ou não o ensino médio, e um booleano que responda se a pessoa está cursando alguma faculdade.

    Verifique se: 
    - A pessoa tem 18 anos ou mais;
    - A pessoa terminou o ensino médio;
    - A pessoa NÃO está cursando alguma faculdade;

    No console mostre e responda a seguinte pergunta: A pessoa está cursando a faculdade? 
      


=======================================================================================


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