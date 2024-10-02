// Funções

let x = 'nada'

console.log(x)

x = 'oi'
imprimeTexto(x)
console.log(x)

//Declarar uma função
// Estrutura nomeDaFunção (parâmetros) {funcionalidade}
function imprimeTexto(texto){
    console.log(texto)
}

imprimeTexto('Sou aluna de Front-End')
imprimeTexto('Olá Mundo')

function soma(){
    return 2+2
}
imprimeTexto(soma())
// console.log(soma())

//Função com dois parâmetros
function somaDeNumeros(numero1, numero2){
    return numero1 + numero2
}

imprimeTexto(somaDeNumeros(10, 8))

function divisaoDeNumeros(numero1, numero2){
    return numero1 / numero2
}

imprimeTexto(divisaoDeNumeros(10, 2))
imprimeTexto(divisaoDeNumeros(2, 10))

// Ordem de parâmetros

function apresentacao(nome, idade){
    return `Meu nome é ${nome} e tenho ${idade} anos.`
}

imprimeTexto(apresentacao('Maria', 32))
imprimeTexto(apresentacao(32, 'Maria')) //  A ordem dos parâmetros é importante

// Parâmetro inicial, para que a função começe com um parâmetro pré-definido
function multiplicacao(n1 = 1, n2 = 1){
    return n1 * n2
}

imprimeTexto(multiplicacao(2, 5))

// Expressão de função

const constanteSoma = function (n1, n2) { return n1 + n2}

imprimeTexto(constanteSoma(15,25))

// Função flecha

const apresentaFlecha = (nome) => `Meu nome é ${nome} `

imprimeTexto(apresentaFlecha('Maria'))

const somaNumeroPequenos = (nu1, nu2) => {
    if(nu1 <= 10 && nu2 <= 10){
        return nu1 + nu2
    }else{
        return 'Seu número é maior do que 10'
    }
}

imprimeTexto(somaNumeroPequenos(2, 11))
imprimeTexto(somaNumeroPequenos(2, 4))