//Os leões baios são animais territoriais. Seu território compreende cerca de 320km² por indivíduo, exceto quando formam casais,
//nesse caso o casal costuma dominar uma área de 400km², juntos. Considerando que existam 9 fêmeas e 5 machos em determinada reserva
//ambiental. Elaborar um programa no qual você deve digitar quantos casais (dados de pesquisa de campo) existem dentre esse total e mostrar
//na tela a soma geral de área dominada, incluindo todos indivíduos.

let qntUmLeaoSolitarioDominaDeTerraEmKm2 = 320
let qntUmCasalDeLeaoDominaDeTerraEmKm2 = 400
let qntdLeoasFemeas = 9, qntdLeoesMachos = 5
let qntsCasaisDeLeoesTem
let qntsLeosIndividuaisTem
let qntdDeTerritorioOcupadoPelosCasais, qntdDeTerritorioOcupadoPelosIndividuais

alert('Bem vindos a nossa reserva ambiental de leões \nAqui temos 9 leoas e 5 leões')
qntsCasaisDeLeoesTem = Number(prompt('Poderia me dizer qnts casais de leões tem nessa reserva ambiental? '))

qntdDeTerritorioOcupadoPelosCasais = qntsCasaisDeLeoesTem * qntUmCasalDeLeaoDominaDeTerraEmKm2
qntsLeosIndividuaisTem = qntdLeoasFemeas + qntdLeoesMachos - qntsCasaisDeLeoesTem
qntdDeTerritorioOcupadoPelosIndividuais = qntsLeosIndividuaisTem * qntUmLeaoSolitarioDominaDeTerraEmKm2

alert('O total de área que os casais dominam é de: ' + qntdDeTerritorioOcupadoPelosCasais  + 
'\nE a quantidade de área dominada pelo leos individuais é de: ' + qntdDeTerritorioOcupadoPelosIndividuais)