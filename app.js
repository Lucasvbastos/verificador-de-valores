function verif() {
  let A = document.querySelector(`input#A`);
  let B = document.querySelector(`input#B`);
  let valA = Number(A.value);
  let valB = Number(B.value);
  const mensagemSucesso ='Parabéns, formulário válido!'

  
  if (valB >= valA) {
    const containerMensagemSucesso = document.querySelector('.success-message');
    document.querySelector('.success-message').innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = 'block';
    return true;
  } else {
    document.querySelector('.error-message').style.display= 'block';
    return false;
}}
