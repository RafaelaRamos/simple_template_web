
let card = document.querySelector('.alert');

function login(){
  const emailValido ='admin@teste.com';
  const senhaValida ='123';
  
  if( document.forms["login"]["email"].value == emailValido &&  document.forms["login"]["senha"].value ==senhaValida){
    novaAba('./html/inicio.html');}
  else{
    console.log(document.forms["login"]["email"].value);
    removerSpans();
    let span = document.createElement('span');
    span.setAttribute('class', ' alert alert-warning alert-dismissible fade show');
    let msg = document.createTextNode('Email ou senha incorretos!');
    span.appendChild(msg);
    card.appendChild(span);
  }}

  function removerSpans(){
    let spans = document.querySelectorAll('span');
    for(let i = 0; i < spans.length; i++){
        card.removeChild(spans[i]);
    }
}

function novaAba(url) {
  var win = window.open(url, '_blank');
  win.focus();
}