class Heroi {
    atacar (){
        console.log('atacou!')
    }
    defender(){
        console.log('defendeu')
    }
}

const heroi =  new Heroi()
heroi.atacar()
heroi.defender()

// usando o construtor

class Heroi2 {
    constructor(nome,idade){
        this.nome = nome
        this.idade = idade
    }

    atacar (){
        console.log(`O ${this.nome} atacou!`)
    }
}

const heroi2 = new Heroi2(
    'Flash' , 80
)

heroi2.atacar()

// static usado somente na função , morre apos encerrar a funcao

class Heroi3 {
    static obterAnoNascimento (idade){
        return 2022 - idade
    }
}

const anoNascimento = Heroi3.obterAnoNascimento(26)

console.log (anoNascimento)