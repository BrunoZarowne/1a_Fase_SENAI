// Criar um sistema para gerenciar projetos e valores de projetos, com HTML e JS. O sistema deve deve seguir o
//layout anexo (imagem). O usuário deverá informar dados de 5 projeto
//(nome do projeto, valor cobrado por hora e quantidade de horas previstas para concluir).

//Ao final devem ser mostrados:
//a) O valor individual de cada projeto 
//b) O valor total dos projetos. 

let varValorHorasP1 = document.getElementById('valorHora1')
let varValorHorasP2 = document.getElementById('valorHora2')
let varValorHorasP3 = document.getElementById('valorHora3')
let varValorHorasP4 = document.getElementById('valorHora4')
let varValorHorasP5 = document.getElementById('valorHora5')


let varQntdHorasP1 = document.getElementById('qntdHora1')
let varQntdHorasP2 = document.getElementById('qntdHora2')
let varQntdHorasP3 = document.getElementById('qntdHora3')
let varQntdHorasP4 = document.getElementById('qntdHora4')
let varQntdHorasP5 = document.getElementById('qntdHora5')

let varResultadoP1 = document.getElementById('resultadoP1')
let varResultadoP2 = document.getElementById('resultadoP2')
let varResultadoP3 = document.getElementById('resultadoP3')
let varResultadoP4 = document.getElementById('resultadoP4')
let varResultadoP5 = document.getElementById('resultadoP5')

let varResultadoTotal = document.getElementById('resultadoGeralProjetos')

function calcularValores(){
    varResultadoP1.textContent += varValorHorasP1.value * varQntdHorasP1.value
    varResultadoP2.textContent += varValorHorasP2.value * varQntdHorasP2.value
    varResultadoP3.textContent += varValorHorasP3.value * varQntdHorasP3.value
    varResultadoP4.textContent += varValorHorasP4.value * varQntdHorasP4.value
    varResultadoP5.textContent += varValorHorasP5.value * varQntdHorasP5.value
    varResultadoTotal.textContent += Number(varResultadoP1.textContent) + Number(varResultadoP2.textContent) 
    + Number(varResultadoP3.textContent) + Number(varResultadoP4.textContent) + Number(varResultadoP5.textContent)

}