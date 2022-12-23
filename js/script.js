let input = document.querySelector('input[name=contato]');
let btn = document.querySelector('#botao');
let lista = document.querySelector('#lista');
let card = document.querySelector('.card');
let contatos = JSON.parse(localStorage.getItem('contato')) || [];

function getContatos(){
    lista.innerHTML = '';

    for(contato of contatos){
        let itemLista = document.createElement('li');
        itemLista.setAttribute('class', 'list-group-item list-group-item-action');
        itemLista.onclick = function(){
            excluirContato(this);
        }

        let itemTexto = document.createTextNode(contato);
        itemLista.appendChild(itemTexto);
        lista.appendChild(itemLista);
    }
}

getContatos();

btn.onclick = function(){
    let novoContato = input.value;

    if(novoContato !== ""){
        contatos.push(novoContato);
        getContatos();
        input.value = '';
        removerSpans();
        salvarDadosNoStorage();
    }else{
        removerSpans();
        let span = document.createElement('span');
        span.setAttribute('class', 'alert alert-warning');
        let msg = document.createTextNode('Você precisa digitar o contato que quer registrar!');
        span.appendChild(msg);
        card.appendChild(span);
    }    
}

function removerSpans(){
    let spans = document.querySelectorAll('span');
    for(let i = 0; i < spans.length; i++){
        card.removeChild(spans[i]);
    }
}

function excluirContato(tar){
    contatos.splice(contatos.indexOf(tar.textContent), 1);
    getContatos();
    salvarDadosNoStorage();
}

function salvarDadosNoStorage(){
    localStorage.setItem('contato', JSON.stringify(contatos));
}




