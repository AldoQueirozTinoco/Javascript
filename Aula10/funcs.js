function greeter(nome){
    console.log(`Greetings ${nome}!`);
}
greeter("Aldoca")
/*function não retorna nada, por isso não
pode ser utilizada como valor de variável*/
function greater(nome){
    return `Bom dia ${nome}!`
}
const variavel = greater("Joelma")
console.log(variavel)