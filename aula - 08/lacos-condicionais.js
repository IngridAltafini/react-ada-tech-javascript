const prompt = require('readline-sync')

//* exemplo 1

// let saldo = Number(prompt.question("Qual o seu saldo?"))

// while (saldo < 0) {
//   saldo = Number(prompt.question("saldo invalido! por favor, informe novamente: "))
// }

// console.log(`Seu saldo atual é: ${saldo}`)

//* exemplo 2

// let notaAluno = Number(prompt.question("informe a nota do aluno: "))

// let somaDasNotas = 0
// let qtNotasValidas = 0

// while (notaAluno >= 0) {
//   somaDasNotas += notaAluno
//   qtNotasValidas++

//   notaAluno = Number(prompt.question("informe a proxima nota: "))
// }

// console.log(somaDasNotas)
// console.log(qtNotasValidas)

// const mediaDasNotas = somaDasNotas / qtNotasValidas

// console.log(`A media das notas é ${mediaDasNotas}`)

//* exemplo 3

const numeroSorteado = parseInt(Math.random() * 10)

let numeroUsuario = Number(prompt.question('informe um numero entre 0 e 10: '))

while (numeroUsuario !== numeroSorteado) {
  console.log('Você errou! Tente novamente.')

  numeroUsuario = Number(prompt.question('informe um numero entre 0 e 10: '))
}

console.log(`Parabéns! Você acertou! O numero era ${numeroSorteado}`)

//loop com contador

let contador = 0

while (contador < 10) {
  console.log(contador)

  if (contador === 5) {
    break
  }

  contador++
}