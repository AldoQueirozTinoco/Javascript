let num1 = 10
let num2 = 2.523

//console.log(num1.toString()+num2)//Concatenação
//console.log(num1.toString(2))//para binario
//console.log(num2.toFixed(1))// arredonda para a casa decimal que voce quer
//console.log(Number.isInteger(num1)) // retorna TRUE pois 10 eh inteiro
//let temp = num1 * "Ola" 
//console.log(Number.isNaN(temp)) //retorna true por causa do erro NaN
let num3 = 0.1
let num4 = 0.8
num4 += num3
num4 += num3 // Aparentemente o valor retornado nao tem problemas??? Ok entao
console.log(num4)
console.log(Number.isInteger(num4))
