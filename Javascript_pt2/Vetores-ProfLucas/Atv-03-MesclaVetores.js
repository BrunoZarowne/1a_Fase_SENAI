//Escreva um programa no qual o usuário digite dois vetores com 3 elementos cada (primeiro os elementos de um, depois os de outro)
//e gere um terceiro vetor de 6 elementos, cujos valores deverão ser compostos pelos elementos intercalados dos dois outros vetores.
//Ao final o programa deverá mostrar os dois vetores originais e o terceiro vetor com os valores intercalados.

let vetorUm = []
let elementoDigitadoUm
let vetorDois = []
let elementoDigitadoDois
let vetorTres = []
let valorVetores = 3

for(i=0; i < 3; i++){
    elementoDigitadoUm = prompt('Digite uma coisa(texto por favor)')
    vetorUm.push(elementoDigitadoUm)
}
for(i=0; i < 3; i++){
    elementoDigitadoDois = Number(prompt('Digite um numero'))
    vetorDois.push(elementoDigitadoDois)
}

for(i=0; i < valorVetores; i++){
    vetorTres.push(vetorUm[i])
    vetorTres.push(vetorDois[i])
}


// vetorTres.push(vetorUm[0], vetorDois[0],vetorUm[1], vetorDois[1],vetorUm[2], vetorDois[2],)

alert('A primeira lista ficou: ' + vetorUm)
alert('A segunda lista ficou: ' + vetorDois)
alert('A soma das duas listas são: \n' + vetorTres)