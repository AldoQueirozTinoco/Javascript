const pessoa={
    nome: "Cássio",
    sobrenome: 'Miranda',
    idade:30,
    endereço:{
        rua:'AV Brasil',
        numero:720   }
};

/* Atribuição normal:
const nome = pessoa.nome*/
const {nome: bacalhau ='', sobrenome, ...resto} = pessoa;
const {rua, numero}=pessoa.endereço;
console.log(bacalhau, sobrenome,resto);
console.log(rua,numero)