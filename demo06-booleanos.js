const podeDirigir = true

if(podeDirigir){
    console.log('Ela pode dirigir')
}
else{
    console.log('Ela não pode dirigir')
};

const saldoEmConta = 0
if(!saldoEmConta) {
    console.log("não tem saldo!")
}

const boolComString = "ae brow!"

//força o valor true ou false
// de acordo com a tabela
console.log("bool Com String", !!boolComString)

//negaçao 
 
console.log("negaçao", !boolComString)

//negação + forçar a bool

console.log(
    'negaçao + forçar bool',
    !(!!boolComString)
)
