const prompt = require('readline-sync')

// expressao 1: inicialização da variavel de controle
// expressao 2: condição de permanencia do for
// expressao 3: incremento da varavel de controle

// for (expressao 1; expressao 2; expressao 3;) {
//  escopo do for
// }

for (let i = 0; i < 5; i++) {
  console.log(i)
}

console.clear()

//* exemplo 1

// let maiorNumero = 0

// let numeroInformado

// for (let i = 1; i <= 5; i++) {
//   numeroInformado = Number(prompt.question("informe um numero positivo: "))

//   if (numeroInformado > maiorNumero) {
//     maiorNumero = numeroInformado
//   }
// }

// console.log(`O maior numero informado foi: ${maiorNumero}`)

//* exemplo 2: percorrendo strings com for

// const nome = "Ingrid"

// for (let i = 0; i < nome.length; i++) {
//   console.log(nome[i])

//   // if (i === 3) {
//   //   break
//   // }
// }

//* exemplo 3: imprimindo numeros pares com for

// for (let i = 0; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i)
//   }
// }

//* Arrays

const notas = [5, 10, 7]

//fatiamento de arrays
console.log(notas.slice(0, 2))
console.log(notas.slice(2))

console.clear()

//adicionando elementos no final do array
notas.push(0)
console.log(notas)

console.clear()

//adicionando elementos no inicio do array
notas.unshift(2)
console.log(notas)

console.clear()

//remover o elemento que esta no final do array
notas.pop()
console.log(notas)

console.clear()

//remover o elemento que esta no inicio do array
notas.shift()
console.log(notas)

console.clear()

//buscando um elemento no array includes
const existeNumero = notas.includes(10)

if (existeNumero) {
  console.log("Numero encontrado")
} else {
  console.log("Numero nao encontrado")
}

console.clear()

//buscando um elemento no array indexOf
const indexOf = notas.indexOf(5)

console.log(indexOf)

console.clear()

//buscando um elemento no array lastIndexOf
const lastIndexOf = notas.lastIndexOf(7)

console.log(lastIndexOf)

//* percorrendo arrays com for

for (let i = 0; i < notas.length; i++) {
  console.log(i, notas[i])
}
