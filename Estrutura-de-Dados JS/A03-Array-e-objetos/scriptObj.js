// --------------------- Objetos ------------------------

const pessoa = {
    nome: 'Juliana',
    sobrenome: 'Moraes',
    profissao: 'Instrutora',
    diaNasc: 15,
    mesNasc: 'abril',
    anoNasc: 1987
}

//-----------acessar um objeto

console.log(pessoa.nome); // notação do ponto
console.log(pessoa['sobrenome']); // notação do colchete

// -------------

const aluno = {
    nome: 'Gustavo',
    idade: 20,
    curso: 'tecnico',
    turma: 'inf001',
    pcd: false
}

//mudar valor de uma propriedade

aluno.idade = 21
console.log(aluno);

aluno['nome'] = 'Gustavo Nunes'
console.log(aluno);

//adcionar propriedade

aluno.matricula = '4012'
console.log(aluno);

aluno.notasDiscSemestre = {
    estruturaDeDados: [6, 10],
    logica:[8.5, 9],
    introProgramacao: [9, 7]
}

console.log(aluno);

//acessando nota de lógica do primeiro semestre

console.log(aluno.notasDiscSemestre.logica[0]);
console.log(aluno.notasDiscSemestre.introProgramacao);

// copiando objeto

const novoAluno = {
    ...aluno,
    nome: 'Fernanda Tavares',
    matricula: '4013',
    notasDiscSemestre: {
        estruturaDeDados: [10, 8],
        logica: [8, 10],
        introProgramacao: [9, 10]
    }
}

console.log(novoAluno);

// Array de objetos

const escola = []
escola.push(aluno)
escola.push(novoAluno)

console.log(escola);
console.log(escola[0]);
console.log(escola[1]);


