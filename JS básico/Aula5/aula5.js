alert('Nem compila, ha')

let compila = confirm("És gay?")//Desculpe a brincadeira, retorna um TRUE/FALSE
while(compila==false){
    compila = confirm("És gay?")//Pergunta até que o valor de compila seja TRUE
}
let num2 = prompt("Agora digite um numero")
alert(`${num2} + 5 = ${parseInt(num2) + 5}!!!!!!!`)// ou Number
alert(`A função number: num2 =${typeof(Number(num2))}`)
//window.confirm("") = faz uma pergunta de sim ou não (True/False)
//window.prompt("") = Pergunta de prompt de string