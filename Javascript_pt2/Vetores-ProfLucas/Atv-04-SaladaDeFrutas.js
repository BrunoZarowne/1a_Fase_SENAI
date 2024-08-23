//Fazer um programa no qual o usuário deve montar uma salada de frutas com uma cereja no final.
//Deve ser perguntado em sequência “Qual fruta adicionar?”. Quando for adicionado a cereja,
//finalizar com a frase “Sua salada de frutas está pronta!”. Mostrar a lista das frutas.

let saladaDeFrutas = []
let frutaDigitada

while(frutaDigitada != 'cereja'){
    frutaDigitada = prompt('Qual fruta deseja adicionar?')
    saladaDeFrutas.push(frutaDigitada)
}
if(frutaDigitada == 'cereja'){
    alert('Sua salada de fruta está pronta!' + '\nAqui está ela: ' + saladaDeFrutas)
}