//            0123456789..
let string = '"um \\texto"'
//        01234567
string = "Um texto"
//       -76543210
let bob = "balbucias baladas e bobeiras"
console.log(string[7])

console.log(string.indexOf("texto"))//retorna o inicio de "texto"
console.log(string.indexOf('t', 5)) //comeca do 5
console.log(string.lastIndexOf('t'))//comeca do final

console.log(string.match(/[a-z]/g)) // retorna todas as letras minusculas em um array

console.log(string.search(/[a-z]/)) // retorna o indice do primeiro minusculo

console.log(string.replace("Um","Outro"))
console.log(string.replace(/t/g,"b"))// o /g faz com que todos os 't' sejam substituidos

console.log(string.length)

console.log(string.slice(0,2))// 1 a mais do fim do slice
console.log(string.slice(-8,-6)) //da esquerda para direita...
console.log(string.slice(3))//fica so a parte esquerda
console.log(string.slice(-5))//da direita pra esquerda...

console.log(string.split(' '))
console.log(bob.split('b')) // al ucias  aladas e  o eiras
console.log(bob.split(' ',2))// separa só 2 vezes

console.log(bob.toUpperCase())
console.log(bob.toLowerCase())