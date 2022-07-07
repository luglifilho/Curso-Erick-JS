function nomeDaFuncao(paramento1){
//bloco de codigo

}

function queDiaEHoje (){
    const data = new Date()
    console.log(`Hoje é Dia:  ${data.getDate()}`)
}

queDiaEHoje()

function soma(valor1, valor2) {
console.log(`A soma de ${valor1} + ${valor2} é:`, valor1+valor2)
}
soma(10,20)
soma(3,4)

function soma(valor1, valor2){
    return valor1 + valor2
}

const idade = 20
const tamanho = 15
const resultado = soma(idade,tamanho)
console.log('Resultado:', resultado)

function multiplicar(valor1, valor2){
    const resultado = valor1 * valor2
    return resultado
}
console.log('Resultado Multiplicaçao: ', multiplicar(idade, tamanho))


const funcionario1 = {
    nome: 'Zezinho',
    desconto : 0.2,
    salarioBruto: 2000,
    salarioLiquido: 0
    }

const funcionario2 = {
    nome: 'Mariazinha',
    desconto: 0.1,
    salarioBruto: 2000,
    salarioLiquido: 0
    }

    function CalculoDoDesconto(salarioBruto,desconto){
        const salarioLiquido = salarioBruto - (salarioBruto * desconto)
        return salarioLiquido
    }

    funcionario1.salarioLiquido = CalculoDoDesconto(
        funcionario1.salarioBruto,
        funcionario1.desconto
    )

    funcionario2.salarioLiquido = CalculoDoDesconto(
        funcionario2.salarioBruto,
        funcionario2.desconto
    )

    console.log(` 
    O salario do ${funcionario1.nome} é: ${funcionario1.salarioLiquido}
    O salario do ${funcionario2.nome} é: ${funcionario2.salarioLiquido}   
    
    `)