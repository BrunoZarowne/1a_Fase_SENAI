//Programar a conversão de uma temperatura digitada pelo usuário em graus Celsius para Fahrenheit. Mostrar o resultado na tela. 

let temperaturaEmGrausCelsius
let calculoDaTemperatura

temperaturaEmGrausCelsius = prompt('Qual o valor que deseja converter? ')
calculoDaTemperatura = (temperaturaEmGrausCelsius * 1.8) + 32

alert('O resultado é: ' + calculoDaTemperatura)