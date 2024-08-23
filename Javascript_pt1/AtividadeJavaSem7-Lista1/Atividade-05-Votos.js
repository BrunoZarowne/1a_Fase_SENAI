//Uma cidade pretende apurar os votos de sua eleição. Faça um programa para ler o número total de eleitores. Em seguida o número de votos do candidato X,
//o número de votos do candidato Y, total de votos brancos e total de votos nulos (a soma desses quatro, deve ser igual ao total de eleitores).
//Calcular e escrever o percentual que cada um representa em relação ao total de eleitores. 

let numeroVotosCandidatoUm, numeroVotosCandidatoDois
let numeroVotosEmBranco, numeroVotosNulos
let numeroDeEleitores, calculoTotalVotos
let percentualCandidatoUm, percentualCandidatoDois
let percentualVotosEmBranco, percentualVotosNulos
let somaTodosOsVotos

numeroDeEleitores = Number(prompt('Qual o numero de eleitores? '))
numeroVotosCandidatoUm = Number(prompt('Qual o numero de votos pro primeiro candidato? '))
numeroVotosCandidatoDois = Number(prompt('Qual o numero de votos pro segundo candidato? '))
numeroVotosEmBranco = Number(prompt('Quantos votos em branco teve?'))
numeroVotosNulos = Number(prompt('Quantos votos nulos tiveram?'))

percentualCandidatoUm = (numeroVotosCandidatoUm / numeroDeEleitores) * 100
percentualCandidatoDois = (numeroVotosCandidatoDois / numeroDeEleitores) * 100
percentualVotosEmBranco = (numeroVotosEmBranco / numeroDeEleitores) * 100
percentualVotosNulos = (numeroVotosNulos / numeroDeEleitores) * 100
somaTodosOsVotos = numeroVotosCandidatoUm + numeroVotosCandidatoDois + numeroVotosEmBranco + numeroVotosNulos

alert('A porcentagem de votos do candidato 1 é: ' + percentualCandidatoUm + '%')
alert('\nA porcentagem de votos do candidato 2 é: ' + percentualCandidatoDois + '%')
alert('\nA porcentagem de votos em branco é: ' + percentualVotosEmBranco + '%')
alert('\nA porcentagem de votos nulos é: ' + percentualVotosNulos + '%')
alert('\nA soma total de votos é: ' + somaTodosOsVotos)

