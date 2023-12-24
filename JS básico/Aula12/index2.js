const a = {
    nome:"luiz",
    sobrenome:"Otávio"
}
let b=a;

a.nome = "João"
console.log(b)

//sem apontarem para o mesmo lugar
b={...a};
a.nome = "José"
console.log(a, b)