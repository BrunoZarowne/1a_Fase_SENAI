let elementoimputUm = document.getElementById('imputUm')
let elementoimputDois = document.getElementById('imputDois')
let somaNumeros



function SomaNumeros(){
    somaNumeros = Number(elementoimputUm.value) + Number(elementoimputDois.value)
    alert('Soma dos numeros é ' + somaNumeros)
}
