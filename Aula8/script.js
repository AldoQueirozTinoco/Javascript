const numero = Number(prompt("digite um número"))
const numeroTitulo = document.getElementById("numero-titulo")
let texto = document.getElementById("texto")

//const numeroTitulo = prompt("digite um numero")
//numeroTitulo = document.getElementById("numero-titulo") acho q funcionava tmbm

numeroTitulo.innerHTML = numero
texto.innerHTML += `<p>Raiz quadrada = ${Math.sqrt(numero)}<p>`
texto.innerHTML += `<p>${numero} é inteiro:${Number.isInteger(numero)}<p>`
texto.innerHTML += `<p>É NaN ${Number.isNaN(numero)}<p>`
texto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero)}<p>`
texto.innerHTML += `<p>Arredondado para cima ${Math.ceil(numero)}<p>`
texto.innerHTML += `<p>Com duas casas decimais ${numero.toFixed(2)}<p>`