function Escopo(){
const form = document.querySelector('.form');
const resultado = document.querySelector('.resultado');
let result;
function recebeForm(evento){
    evento.preventDefault();
    let peso = form.querySelector('.peso');
    let altura = form.querySelector('.altura');
    altura = parseFloat(altura)
    peso = parseFloat(peso);
    console.log(peso/(altura*altura));
    if((peso/(altura*altura)) < 18.5){
        result = "Abaixo do peso";
    }else if((peso/(altura*altura)) >18.5  && (peso/(altura*altura)) <=24.9){
        result = "Peso normal";
    }else if ((peso/(altura*altura)) >24.9  && (peso/(altura*altura)) <=29.9){
        result = "Sobrepeso";
    }
    else if ((peso/(altura*altura)) >29.9  && (peso/(altura*altura)) <=34.9){
        result = "Obesidade grau 1";
    }
    else if ((peso/(altura*altura)) >34.9  && (peso/(altura*altura)) <=39.9){
        result = "Obesidade grau 2";
    }
    else if ((peso/(altura*altura)) >39.9){
        result = "Obesidade grau 3";
    }
}

resultado.innerHTML == `<p>${result}</p>`
form.addEventListener('submit',recebeForm);
};
Escopo();