function dia(){
    switch(new Date().getDay()){
        case 0: return("Domingo")
        case 1: return("Segunda")
        case 2: return("Terça")
        case 3: return("Quarta")
        case 4: return("Quinta")
        case 5: return("Sexta")
        case 6: return("Sábado")
    }
}

function setHora(){
    const horas = document.querySelector(".horas");
   horas.innerHTML = dia();
}
setHora();