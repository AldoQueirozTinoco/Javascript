const pontUsuario = 999;

if(pontUsuario >= 1000){
    console.log("Usuário vip")
} else{console.log("usuário normal")}

const nivelUsuario = pontUsuario >=1000 ? 'Usuario VIP' : "Usuário normal";
// (condicao) ? 'valor para verdadeiro' : Valor para falso;
console.log(nivelUsuario);

const corUsuario = null;
const corPadrao = corUsuario || 'preta'
console.log(corPadrao);
