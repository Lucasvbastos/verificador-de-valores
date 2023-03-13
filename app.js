function verif() {
  var valA = document.getElementById("valA").value;
  var valB = document.getElementById("valB").value;
  
  if (valB > valA) {
    alert("Parabéns, formulário válido!");
    return true;
  } else {
    alert("Valor de B deve ser maior que A.");
    return false;
}}
