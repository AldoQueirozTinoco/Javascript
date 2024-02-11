let nome = "luizão"; // redeclarando
var nome2 = "luizão"

if(true){
    var nome2 = "Otávio"; // redeclarando
    console.log(nome2);
}
console.log(nome2);

/*  Let têm escopo de bloco (dentro de {} pode ser redeclarado)
    Var têm escopo de função
 */