const array = [1,2,3]
array[0] = "luiz"
console.log(array)
/*lembrando que podemos modificar os
valores dentro do array mesmo que esse
seja const*/
const pessoa1 = {
    nome: "Jailson",
    sobrenome: "Carvalho"
}
//Objetos são como structs em C
console.log(pessoa1.nome)

function criaPerson(nome,sobrenome,idade){
return{nome,sobrenome,idade};
}

const person1 = criaPerson("Luiz","Inácio",99)
console.log(person1)
console.log(person1.nome)

const pessoa2 = {
    nomes:"lambida",
    sobrenomes:"otávio",
    idades:10,
    fala(){
        /*Podemos usar funções dentro do objeto
        essas são chamadas de métodos*/
        console.log(`${this.nomes} ${this.sobrenomes} está falando olá!`)
    },
    incrementaIdade(){
        this.idades++;
        console.log(`Minha idade agora é ${this.idades}`)
    }
};
pessoa2.fala();
pessoa2.incrementaIdade();