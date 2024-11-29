//operadores booleanos: comparações

const numero1 = 10
const numero2 = 20

console.log(numero1 == numero2)
console.log(numero1 === numero2)
console.log(numero1 === "10")

console.log(numero1 != numero2)

const idadePessoa1 = 16
const idadePessoa2 = 39

console.log(idadePessoa1 >= 18 && idadePessoa2 >= 18)
console.log(idadePessoa1 >= 18 || idadePessoa2 >= 18)

console.log(!true)

console.log(!(idadePessoa1 >= 18)) // retorna verdadeiro se a pessoa for menor de idade