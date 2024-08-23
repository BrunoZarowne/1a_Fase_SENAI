//Criar um sistema de comparação de carros, de acordo com a imagem. Devem ser digitadas notas de 0 a 10 para os 3 critérios (conforto, economia, design)
//de cada carro, o que irá gerar uma média com duas casas após a vírgula. Ao clicar em comparar, devem ser mostradas a médias de cada carro e o melhor
//carro (carro com melhor média) nos respectivos campos.


function compararCarros(){

//carro 1 
let notaCarroUmConforto = document.getElementById('input1.1')
let notaCarroUmEconomia = document.getElementById('input1.2')
let notaCarroUmDesign = document.getElementById('input1.3')
let notaUmMedia

//carro 2

let notaCarroDoisConforto = document.getElementById('input2.1')
let notaCarroDoisEconomia = document.getElementById('input2.2')
let notaCarroDoisDesign = document.getElementById('input2.3')
let notaDoisMedia

//carro3

let notaCarroTresConforto = document.getElementById('input3.1')
let notaCarroTresEconomia = document.getElementById('input3.2')
let notaCarroTresDesign = document.getElementById('input3.3')
let notaTresMedia

//medias

let valorMediaUm = document.getElementById('media1')
let valorMediaDois = document.getElementById('media2')
let valorMediaTres = document.getElementById('media3')

let inputFinalVar = document.getElementById('inputFinal')


notaUmMedia = (Number(notaCarroUmConforto.value) + Number(notaCarroUmEconomia.value) + Number(notaCarroUmDesign.value)) / 3
notaDoisMedia = (Number(notaCarroDoisConforto.value) + Number(notaCarroDoisEconomia.value) + Number(notaCarroDoisDesign.value)) / 3
notaTresMedia = (Number(notaCarroTresConforto.value) + Number(notaCarroTresEconomia.value) + Number(notaCarroTresDesign.value)) / 3

let maiorNota = Math.max(notaUmMedia, notaDoisMedia, notaTresMedia)
valorMediaUm.value += notaUmMedia.toFixed(2)
valorMediaDois.value += notaDoisMedia.toFixed(2)
valorMediaTres.value += notaTresMedia.toFixed(2)

if(maiorNota == notaUmMedia){
    inputFinalVar.value = "Carro 1"
}else if(maiorNota == notaDoisMedia){
 inputFinalVar.value = "Carro 2"
}else if(maiorNota == notaTresMedia){
    inputFinalVar.value = "Carro 3"
}
}