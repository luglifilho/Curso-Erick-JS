//meses começam do zero

const dataAniversario = new Date(2020,0 ,20)
console.log(dataAniversario)

const primeiraDataDoJS = new Date(0)
console.log(primeiraDataDoJS)

const hoje  = new Date()
console.log(hoje.toString())
console.log(hoje.toLocaleDateString())

// formato global recomendado!!

console.log(hoje.toISOString())


const dia = hoje.getDate()
hoje.setDate(dia+5)   // + 5 dias do dia d ehoje
console.log(hoje)

//hoje.setHours(10,30,0)

console.log(`
Dia: ${hoje.getDate()}
Mes : ${hoje.getFullYear()}
Hora: ${hoje.getHours()}
Minuto: ${hoje.getMinutes()}
Segundos: ${hoje.getSeconds()}

`)

console.log( new Date (2020,10,05 ) > new Date (2020,10,06))