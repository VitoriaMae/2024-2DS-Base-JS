// Tipo Number

// var era utilizada para todas as variáveis
const numero01 = 3
// let é uma atualização do var e é possível de variação
const numero02 = 10
// const é uma maneira de declarar uma variável que irá permanecer constante
const numero03 = 7

const soma = numero01 + numero03
const subtracao = numero02 - numero01
const multiplicacao = numero03 * numero02
const divisao = numero02 / numero01

console.log(soma)
console.log(subtracao)
console.log(multiplicacao)
console.log(divisao)

// Tipo Float - ponto flutuante

const numero04 = 3.2
const numero05 = .5

const multiplicacao2 = numero04 * numero05

console.log(multiplicacao2)

// NaN -> Not a Number

const nome = 'Adriel'
const falsoNumero = '7'

const naoEnumero = nome * 0.4
const concatenacao01 = falsoNumero + numero04

console.log(naoEnumero)
console.log(concatenacao01)

// Dados do tipo String = Textos

const frase = 'Meu nome é: '
const frase2 = 'O segundo DS é "estudioso", não é?'

const concatenacao02 = frase + nome

console.log(concatenacao02)
console.log(frase2)

// Dados do tipo Boolean
// True -> verdadeiro
// False -> Falso

const numero06 = 7

const comparacao01 = numero06 == falsoNumero
const comparacao02 = numero06 === falsoNumero

// Um sinal de igual (=) é para declarar
// Dois sinais de igual (==) comparando os valores e não o tipo do dado (comparação fraca)
// Três sinais de igual (===) comparando os tipos de dado. (Comparação forte)

console.log(comparacao01)
console.log(comparacao02)