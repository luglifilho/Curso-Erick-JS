const minhaLista = []
const minhaListaDeTarefas = [

    'mandar email',
    'colocar comida para o dog',
        'limpar o quarto',
        'ouvir musica',
        'dormir'
]


    console.log(minhaListaDeTarefas[0] , '\n', minhaListaDeTarefas[1], '\n', minhaListaDeTarefas[4])

    //quantidade de listas no array

    console.log (minhaListaDeTarefas.length)

    //adicioanr item
    minhaListaDeTarefas.push('formatar computador')

    console.log(minhaListaDeTarefas);

    //remover ultimo da lista

    const ultimoDaLista = minhaListaDeTarefas.pop()
    console.log(ultimoDaLista, minhaListaDeTarefas)

    //remover primeiro da lista

    const primeiro = minhaListaDeTarefas.shift()
    console.log(primeiro,minhaListaDeTarefas)

    //remover item especifico 
    console.log(minhaListaDeTarefas[2])

    //qual item de inicio
    //quantos remover

    minhaListaDeTarefas.splice(2,1)
    console.log(minhaListaDeTarefas)


    const list = [
        1,'computador', 0.22
    ]

    //verificar o tipo do array

    console.log (typeof(list), list)

    //verificar se é um array da forma correta

    console.log(Array.isArray(list))

    //ordenar lista

    const numeros = [1,4,3,5,2,7,2.5]
    console.log(numeros.sort())

    const letras = ['z','g','f','t','y','q','w','d','v','b']
    console.log(letras.sort())

    //juntar dois arrays

    const junto = list.concat([1,2,3])

    console.log(junto)

    //juntar dois arrays em uma string

    console.log(junto.join(','))

    //verificar o indice do item

    const index = list.indexOf('computador')
    console.log(list[index])


