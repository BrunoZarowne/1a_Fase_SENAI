// Em uma fábrica de reciclagem de materiais, cada 10kg de plástico rendem R$2,00 cada 30kg de papel rendem R$3,00 e cada 50kg de metal rendem R$5,00.
//Perguntar ao usuário a quantidade (kg) de cada material que deseja entregar na fábrica e mostrar o total que receberá em reais. 

let qntsKgsDePlastico, qntsKgsDePapel, qntsKgsDeMetal
let calculoPlastico, calculoPapel, calculoMetal

qntsKgsDePlastico = Number(prompt('Quantos Kgs de plastico voce quer entregar? '))
qntsKgsDePapel = Number(prompt('Quantos Kgs de papel voce quer entregar? '))
qntsKgsDeMetal = Number(prompt('Quantos Kgs de metal voce quer entregar? '))

calculoPlastico = qntsKgsDePlastico * 0.10
calculoPapel = qntsKgsDePapel * 0.10
calculoMetal = qntsKgsDeMetal * 0.10

alert('O valor pelo plástico que voce recebera será: ' + calculoPlastico)
alert('O valor pelo papel que voce recebera será: ' + calculoPapel)
alert('O valor pelo metal que voce recebera será: ' + calculoMetal)