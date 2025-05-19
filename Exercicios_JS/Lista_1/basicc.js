/*
1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
utilizando uma estrutura de controle if.

Orientação: a execução é contínua, ao digitar 'S' ou 's' encerra, também verifica entrada inválida e informa
se é par ou ímpar. 

console.log("Digite 'S' para sair.")
let aux = 0

while (aux == 0) {
    let entrada = prompt("Digite o número: ")

    if (entrada === 'S' || entrada === 's') {
        aux = 1
    } else {
        let numero = parseInt(entrada)
        
        if (isNaN(numero)) {
            console.log("Entrada inválida. Digite um número ou 'S' para sair.")
        } else if (numero % 2 == 0) {
            console.log("É um número par!")
        } else {
            console.log("É um número ímpar!")
        }
    }
}

*/

/*
2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
controle if-else.

Orientação: a execução é contínua, ao digitar 'S' ou 's' encerra, também verifica entrada inválida.
A classificação da idade é informada com base nessas faixas de idade:

Classificação:
                Criança: 0 - 14
                Adolescente: 15 - 18
                Adulto: 19 - 60
                Idoso: 60 ou mais




console.log("Digite 'S' para sair.")

console.log("Classificação:")
console.log("Criança: 0 - 14")
console.log("Adolescente: 15 - 18")
console.log("Adulto: 19 - 60")
console.log("Idoso: 60 ou mais")

let aux = 0


while (aux == 0) {
    let entrada = prompt("Digite a idade: ")

    if (entrada === 'S' || entrada === 's') {
        aux = 1
    } else {
        let idade = parseInt(entrada)
        
        if (isNaN(idade)) {
            console.log("Entrada inválida. Digite um número ou 'S' para sair.")
        } else if (idade>0  && idade<= 14) {
            console.log("Criança!")
        }else if (idade>=15  && idade<= 18) {
            console.log("Adolescente!")
        }else if (idade>=19  && idade<= 60) {
                    console.log("Adulto!")
        }else if (idade>=60) {
            console.log("Idoso!")
        }else if(idade<0){
            console.log("Entrada inválida!")
        }
    }
}

*/

/*
3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

Orientação: a execução é contínua, ao digitar 'S' ou 's' encerra, também verifica entrada inválida e a classificação da 
nota informada tem base nessa faixa de notas:

Classificação:
                Criança: 0 - 14
                Adolescente: 15 - 18
                Adulto: 19 - 60
                Idoso: 60 ou mais




console.log("Digite 'S' para sair.")

console.log("Classificação:")
console.log("Aprovado: 6 ou mais")
console.log("Recuperação: 4,5 ou mais")
console.log("Reprovado: menos que 4,5")

let aux = 0


while (aux == 0) {
    let entrada = prompt("Digite a nota: ")

    if (entrada === 'S' || entrada === 's') {
        aux = 1
    } else {
        let nota = parseInt(entrada)
        
        if (isNaN(nota)) {
            console.log("Entrada inválida. Digite um número ou 'S' para sair.")
        } else if (nota>=0  && nota<= 4.4) {
            console.log("Reprovado!")
        }else if (nota>=4.5  && nota<= 5.9) {
            console.log("Recuperação!")
        }else if (nota>=6  && nota<= 10) {
                    console.log("Aprovado!")
        }else if(nota<0){
            console.log("Entrada inválida!")
        }
    }
}

*/

/*
4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada.

Orientação: a execução é contínua, ao digitar 'S' ou 's' encerra. Entrada inválida será avisada.


console.log("Digite 'S' para sair.")

let aux = 0

while (aux == 0) {
    console.log("\nMenu:")
    console.log("1 - Uma hora de sinuca com combo hambúrguer e bebida.")
    console.log("2 - Cerveja liberada.")
    console.log("3 - Lanche liberado.")
    
    let entrada = prompt("Digite a opção desejada: ")

    if (entrada === 'S' || entrada === 's') {
        aux = 1
    } else {
        switch (entrada) {
            case "1":
                console.log("Você escolheu: Uma hora de sinuca com combo hambúrguer e bebida.")
                break
            case "2":
                console.log("Você escolheu: Cerveja liberada.")
                break
            case "3":
                console.log("Você escolheu: Lanche liberado.")
                break
            default:
                console.log("Opção inválida. Digite 1, 2, 3 ou 'S' para sair.")
        }
    }
}

*/

/*
5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else.

Orientação: IMC = peso / (altura * altura). A execução é contínua, e digitar 'S' encerra. Verifica entrada inválida.

console.log("Digite 'S' para sair.")

let aux = 0

while (aux == 0) {
    let pesoEntrada = prompt("Digite seu peso em kg: ")
    if (pesoEntrada === 'S' || pesoEntrada === 's') break

    let alturaEntrada = prompt("Digite sua altura em metros (ex: 1.75): ")
    if (alturaEntrada === 'S' || alturaEntrada === 's') break

    let peso = parseFloat(pesoEntrada)
    let altura = parseFloat(alturaEntrada)

    if (isNaN(peso) || isNaN(altura) || altura <= 0 || peso<=0) {
        console.log("Entrada inválida.")
    } else {
        let imc = peso / (altura * altura)
        console.log("Seu IMC é: " + imc.toFixed(2))

        if (imc < 18.5) {
            console.log("Baixo peso")
        } else if (imc < 25) {
            console.log("Peso normal")
        } else if (imc < 30) {
            console.log("Sobrepeso")
        } else {
            console.log("Obesidade")
        }
    }
}

*/

/*
6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)



console.log("Digite 'S' para sair.")

let aux = 0

while (aux == 0) {
    let a = prompt("Digite o lado A: ")
    if (a === 'S' || a === 's') break
    let b = prompt("Digite o lado B: ")
    if (b === 'S' || b === 's') break
    let c = prompt("Digite o lado C: ")
    if (c === 'S' || c === 's') break

    a = parseFloat(a)
    b = parseFloat(b)
    c = parseFloat(c)

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        console.log("Entrada inválida.")
    } else if (a < b + c && b < a + c && c < a + b) {
        if (a === b && b === c) {
            console.log("Triângulo Equilátero.")
        } else if (a === b || a === c || b === c) {
            console.log("Triângulo Isósceles.")
        } else {
            console.log("Triângulo Escaleno.")
        }
    } else {
        console.log("Os lados não formam um triângulo.")
    }
}


*/

/*
7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.


let aux = 0
console.log("Digite 'S' para sair.")

while (aux == 0) {
    console.log("\nPreço da maça: R$ 0,30")
    console.log("Preço da maça para 12 ou mais unidades: R$ 0,25")
    let entrada = prompt("Quantas maçãs deseja comprar? ")
20
    if (entrada === 'S' || entrada === 's') break

    let quantidade = parseInt(entrada)

    if (isNaN(quantidade) || quantidade <= 0) {
        console.log("Entrada inválida.")
    } else {
        let preco = quantidade < 12 ? 0.30 : 0.25
        let total = preco * quantidade
        console.log(`Total a pagar: R$ ${total.toFixed(2)}`)
    }
}

*/


/*

8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.



console.log("Digite 'S' para sair.")

while (true) {
    let a = prompt("Digite o primeiro número: ")
    if (a === 'S' || a === 's') break
    let b = prompt("Digite o segundo número: ")
    if (b === 'S' || b === 's') break

    a = parseFloat(a)
    b = parseFloat(b)

    if (isNaN(a) || isNaN(b)) {
        console.log("Entrada inválida.")
    } else if (a === b) {
        console.log("Os valores não podem ser iguais.")
    } else if (a < b) {
        console.log(`Ordem crescente: ${a}, ${b}`)
    } else {
        console.log(`Ordem crescente: ${b}, ${a}`)
    }
}

*/

/*
9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
utilizando um loop for.



console.log("Contagem regressiva:")

for (let i = 10; i >= 1; i--) {
    console.log(i)
}

*/

/*
10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.



let entrada = prompt("Digite um número inteiro: ")
let numero = parseInt(entrada)

if (!isNaN(numero)) {
    for (let i = 0; i < 10; i++) {
        console.log(numero)
    }
} else {
    console.log("Entrada inválida.")
}
*/

/*

11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
utilizando um loop for.



let soma = 0

for (let i = 1; i <= 5; i++) {
    let entrada = prompt(`Digite o ${i}º número: `)
    let numero = parseFloat(entrada)

    if (isNaN(numero)) {
        console.log("Número inválido.")
        i-- // repete a iteração
    } else {
        soma += numero
    }
}

console.log("Soma total: " + soma)
*/

/*
12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.



let entrada = prompt("Digite um número para ver a tabuada: ")
let numero = parseInt(entrada)

if (!isNaN(numero)) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`)
    }
} else {
    console.log("Entrada inválida.")
}

*/

/*

13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.



let soma = 0
let count = 0

console.log("A vírgula não é reconhecida como separador decimal, utilize ponto.")

while (true) {

    let entrada = prompt("Digite um número decimal (0 para sair): ")
    let numero = parseFloat(entrada)

    if (isNaN(numero)) {
        console.log("Número inválido.")
    } else if (numero === 0) {
        break
    } else {
        soma += numero
        count++
    }
}

if (count > 0) {
    let media = soma / count
    console.log(`Média dos números: ${media.toFixed(2)}`)
} else {
    console.log("Nenhum número válido foi digitado.")
}

*/

/*
14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while.



let entrada = prompt("Digite um número inteiro positivo: ")
let numero = parseInt(entrada)

if (!isNaN(numero) && numero >= 0) {
    let fatorial = 1
    for (let i = 1; i <= numero; i++) {
        fatorial *= i
    }
    console.log(`Fatorial de ${numero} é ${fatorial}`)
} else {
    console.log("Entrada inválida.")
}

*/

/*
15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for.

let a = 0, b = 1

console.log("Sequência de Fibonacci:")

for (let i = 0; i < 10; i++) {
    console.log(a)
    let temp = a + b
    a = b
    b = temp
}

*/


































