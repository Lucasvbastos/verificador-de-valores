function verif() {
  let A = document.querySelector(`input#A`);
  let B = document.querySelector(`input#B`);
  let res = document.querySelector(`div#res`)
  let valA = Number(A.value);
  let valB = Number(B.value);
  
  if (valB > valA) {
    //alert("Parabéns, formulário válido!");
    res.innerText = "Parabéns, formulário válido!"
    return true;
  } else {
    //alert("Valor de B deve ser maior que A.");
    res.innerHTML = "Valor de B deve ser maior que A."
    return false;
}}
