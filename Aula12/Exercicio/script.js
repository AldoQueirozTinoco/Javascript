function meuEscopo(){
    const form = document.querySelector('.form');//para selecionar a classe form
    const resultado = document.querySelector('.resultado')//Para selecionar a classe resultado
    const pessoas = [];//Vetor de objetos
/*    form.onsubmit = function(evento){
        evento.preventDefault();
        alert(1);
    };*/

    function recebeEventoForm(evento){
        evento.preventDefault();//impede a pagina de atualizar
        const person = { //Objeto person
            nome: form.querySelector('.nome').value, //.value para ler os valores que são escritos
            sobrenome: form.querySelector('.sobrenome').value,
            peso: form.querySelector('.peso').value,
            altura: form.querySelector('.altura').value
        }
        pessoas.push(person)
        console.log(pessoas)
        resultado.innerHTML += `<p>${person.nome} ${person.sobrenome} ${person.peso} ${person.altura}<p>` 
        //Concatenando os dados na div no HTML
    }
    form.addEventListener('submit',recebeEventoForm)

}
meuEscopo();