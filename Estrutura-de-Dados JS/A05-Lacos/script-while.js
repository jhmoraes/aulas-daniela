// While

let comer = prompt('Deseja comer uma coxinha? S-sim / N-não').toUpperCase()
let nCoxinhas = 0 //numero de coxinhas
let conta = 0   // valor total

while(comer !== 'N'){
    nCoxinhas++
    conta += 5.50
    comer = prompt('Deseja comer mais uma coxinha? S-sim / N-não').toUpperCase()
}

console.log(`Você comeu ${nCoxinhas} coxinhas\nTotal da conta = R$${conta}`)  