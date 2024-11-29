const prompt = require('readline-sync')

const idade = prompt.question("Qual eh a sua idade?")

const idadeEmNumero = Number(idade)

console.log(idadeEmNumero)

// Qual sera a saida desse codigo?

let n = 1 + '1' // '11' (string)

n = n - 1 // 11 - 1 = 10

console.log(n)

//Qual sera a saida desse codigo?
console.log(2 + 3 + 4 + '5') // 5 + 4 + '5' = 9 + '5' = '95'

//Qual sera a saida desse codigo?
console.log('5' + 2 + 3 + 4) // '52' + 3 + 4 = '523' + 4 = '5234'

//Qual sera a saida desse codigo?
console.log('10' - '4' - '3' - 2 + '5') // 6 - '3' - 2 + '5' = 3 - 2 + '5' = 1 + '5' = '15'