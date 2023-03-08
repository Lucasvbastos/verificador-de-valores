function verificar(){
    let tn1 = document.querySelector(`input#A`)
    let tn2 = document.querySelector(`input#B`)
    let res = document.getElementById('res')
    let n1 = Number(tn1.value)
    let n2 = Number(tn2.value)
    var S = n1 + n2
    res.innerHTML = `O valor de ${n1} + ${n2} igual a <strong>${S}</strong>`
}
