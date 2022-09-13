const heroi = {
nome : 'Flash',
idade : 100,
sexo: 'masculino'
}

console.log('nome:',heroi.nome)
console.log("idade:", heroi['idade'])
console.log('nao existe:', heroi.naoExiste)


heroi.id = 0001

console.log('id',heroi.id, heroi)

//saber chaves
console.log(Object.keys(heroi))

//saber valores

console.log(Object.values(heroi))

//juntar dois objetos

const pessoa = {
    tamanho : '15 metros'
}

//const novoObj = Object.assign(heroi, pessoa)

pessoa.forca = 200

const novoObj = Object.assign(heroi, pessoa)
delete novoObj.nome

console.log(novoObj)

