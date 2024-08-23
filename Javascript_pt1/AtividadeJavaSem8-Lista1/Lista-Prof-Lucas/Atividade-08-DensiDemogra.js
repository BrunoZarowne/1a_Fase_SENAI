//Criar um programa para calcular a densidade demográfica (habitantes por quilômetro quadrado) de uma região.
//Sendo, densidade igual a população (total de habitantes) dividida pela área (quilômetros quadrados).
//Mostrar mensagens para densidade alta (maior ou igual a 100), média (entre 25 e 100), baixa (menor que 25).

let populacaoTotal, areaKmsQuadrados
let densidadeDemografica

populacaoTotal = Number(prompt('Qual a população total do lugar? '))
areaKmsQuadrados = Number(prompt('Qual KmsQuadrados esse área tem? '))

densidadeDemografica = populacaoTotal / areaKmsQuadrados

if(densidadeDemografica < 25){
    alert('Desnsidade demografica baixa!' + '\nSua densidade demografica é de: ' + densidadeDemografica)
}else if(densidadeDemografica >= 25 && densidadeDemografica < 100){
    alert('Desnsidade demografica média!' + '\nSua densidade demografica é de: ' + densidadeDemografica)
}else if(densidadeDemografica > 100){
    alert('Desnsidade demografica alta!' + '\nSua densidade demografica é de: ' + densidadeDemografica)
}