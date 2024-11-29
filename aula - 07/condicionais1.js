const prompt = require('readline-sync')

const idade = Number(prompt.question('Qual eh a sua idade?'))

if (idade >= 18) {
  console.log('vc é maior de idade')
} else {
  console.log('vc é menor de idade')
}

const mediaAluno = 4.999

if (mediaAluno >= 7) {
  console.log('vc passou')
} else if (mediaAluno < 7 && mediaAluno >= 5) {
  console.log('prova final')
} else {
  console.log('vc reprovou')
}

const idadePessoa = 15
const temCNH = true

if (idadePessoa >= 18 && temCNH) {
  console.log('vc pode dirigir')
} else {
  console.log('vc não pode dirigir')
}