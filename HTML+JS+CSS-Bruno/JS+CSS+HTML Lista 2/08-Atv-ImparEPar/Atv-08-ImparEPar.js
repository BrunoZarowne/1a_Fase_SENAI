//Programar um sistema onde o usuário preencha 5 números (inputs) com um botão que verifica se os números são pares ou ímpares.
//Caso algum número não seja preenchido, mostrar "Indefinido".

let varNumeroUm = document.getElementById('num1')
let varNumeroDois = document.getElementById('num2')
let varNumeroTres = document.getElementById('num3')
let varNumeroQuatro = document.getElementById('num4')
let varNumeroCinco = document.getElementById('num5')

let varResultadoUm = document.getElementById('resultado1')
let varResultadoDois = document.getElementById('resultado2')
let varResultadoTres = document.getElementById('resultado3')
let varResultadoQuatro = document.getElementById('resultado4')
let varResultadoCinco = document.getElementById('resultado5')

function verificarResultado(){
    if(varNumeroUm.value % 2 === 0){
        varResultadoUm.value = 'Par'
    }else if(varNumeroUm.value % 2 !== 0){
        varResultadoUm.value = 'Impar'
    }

    if(varNumeroDois.value % 2 === 0){
        varResultadoDois.value = 'Par'
    }else if(varNumeroDois.value % 2 !== 0){
        varResultadoDois.value = 'Impar'
    }

    if(varNumeroTres.value % 2 === 0){
        varResultadoTres.value = 'Par'
    }else if(varNumeroTres.value % 2 !== 0){
        varResultadoTres.value = 'Impar'
    }

    if(varNumeroQuatro.value % 2 === 0){
        varResultadoQuatro.value = 'Par'
    }else if(varNumeroQuatro.value % 2 !== 0){
        varResultadoQuatro.value = 'Impar'
    }

    if(varNumeroCinco.value % 2 === 0){
        varResultadoCinco.value = 'Par'
    }else if(varNumeroCinco.value % 2 !== 0){
        varResultadoCinco.value = 'Impar'
    }


}