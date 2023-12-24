const nome = "Aldo Queiroz", idade = 18, peso = 54,altura = 1.70;
let IMC =  peso/(altura*altura);
console.log(nome,"tem",idade,"anos, pesa",peso,"kg");
console.log(`tem ${altura}m de altura e seu IMC é de ${IMC}`); // Forma mais legivel de dar console.log
let anoNascimento;
anoNascimento = 2023 - idade;
console.log(nome,"nasceu em",anoNascimento);