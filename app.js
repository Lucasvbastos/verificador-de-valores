function verif() {
  let A = document.getElementById("A");
  let B = document.getElementById("B");
  let valA = Number(A.value);
  let valB = Number(B.value);
  
  if (valB > valA) {
    alert("Parabéns, formulário válido!");
    return true;
  } else {
    alert("Valor de B deve ser maior que A.");
    return false;
}}
