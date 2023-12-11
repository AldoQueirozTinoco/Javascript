const alunos = ["luiz","joao","maria"]
/*Tentar manter os arrays consisos,
Não utilizar diversos tipos de dados nele*/
console.log(alunos)
//                 0      1      2
//const alunos = ["luiz","joao","maria"]

console.log(alunos[0])
console.log(alunos[0][0])
alunos[alunos.length]="Jose" //Coloca o elemento descrito no final do array(alunos.length = 3)
alunos.push("Fagner") //add elemento no final
alunos.unshift("Luiza")//add elemento no primeiro indice
console.log(alunos)
const removido = alunos.pop()//remove o ultimo elemento
const removido2 = alunos.shift()//remove o primeiro elemento
console.log(alunos)
console.log(alunos.slice(0,2))
console.log(alunos instanceof Array)

