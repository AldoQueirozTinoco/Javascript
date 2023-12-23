//Aula de primitivos
//tipos(Imutáveis):String, Number, boolean,undefined, null.
let nome = "mano toba"
let b = nome;
nome = "Manolito"
console.log(nome)
console.log(nome[0],b) //Variáveis são imutáveis
//O valor de b e nome mantêm-se independentes
let c = [1,2,3]
let d = c
console.log(c,d)
c.push(4)
console.log(c,d)
//Valores estão linkados
d.pop();
console.log(c);
//valores por referência (mutável) - array, object, function
// E para serem independentes?
d = [...c]
c.push(4);
console.log(c,d);