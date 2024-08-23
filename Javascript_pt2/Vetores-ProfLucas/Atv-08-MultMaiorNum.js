//Faça um programa que solicite ao usuário digitar 5 números e mostre a soma da multiplicação dos números pelo maior número digitado.
//(Exemplo: pegar os 4 números digitados que não são o maior e multiplicá-los individualmente pelo maior. Mostrar a soma das multiplicações).

let numeros = []
let numeroDigitado
let numeroMaior = 1
let multUm, multDois, multTres, multQuatro

for(i=0; i  < 5; i++){
    numeroDigitado = Number(prompt('Digite um numero'))
    numeros.push(numeroDigitado)

    if(numeroDigitado > numeroMaior){
        numeroMaior = numeroDigitado
    }

}

let numeroMultiplicacao = numeros.indexOf(numeroMaior)

switch(numeroMultiplicacao){
    case 0:
        multUm = numeros[0] * numeros[1]
        multDois = numeros[0] * numeros[2]
        multTres = numeros[0] * numeros[3]
        multQuatro = numeros[0] * numeros[4]
        alert('O resultados das multiplicações são:' + '\n1-> ' + multUm + '\n2-> ' + multDois + '\n3-> ' + multTres + '\n4-> ' + multQuatro)

    break

    case 1:
        multUm = numeros[1] * numeros[0]
        multDois = numeros[1] * numeros[2]
        multTres = numeros[1] * numeros[3]
        multQuatro = numeros[1] * numeros[4]
        alert('O resultados das multiplicações são:' + '\n1-> ' + multUm + '\n2-> ' + multDois + '\n3-> ' + multTres + '\n4-> ' + multQuatro)

    break

    case 2:
        multUm = numeros[2] * numeros[0]
        multDois = numeros[2] * numeros[1]
        multTres = numeros[2] * numeros[3]
        multQuatro = numeros[2] * numeros[4]
        alert('O resultados das multiplicações são:' + '\n1-> ' + multUm + '\n2-> ' + multDois + '\n3-> ' + multTres + '\n4-> ' + multQuatro)

    break

    case 3:
        multUm = numeros[3] * numeros[0]
        multDois = numeros[3] * numeros[1]
        multTres = numeros[3] * numeros[2]
        multQuatro = numeros[3] * numeros[4]
        alert('O resultados das multiplicações são:' + '\n1-> ' + multUm + '\n2-> ' + multDois + '\n3-> ' + multTres + '\n4-> ' + multQuatro)

    break

    case 4:
        multUm = numeros[4] * numeros[0]
        multDois = numeros[4] * numeros[1]
        multTres = numeros[4] * numeros[2]
        multQuatro = numeros[4] * numeros[3]
        alert('O resultados das multiplicações são:' + '\n1-> ' + multUm + '\n2-> ' + multDois + '\n3-> ' + multTres + '\n4-> ' + multQuatro)
    break
}