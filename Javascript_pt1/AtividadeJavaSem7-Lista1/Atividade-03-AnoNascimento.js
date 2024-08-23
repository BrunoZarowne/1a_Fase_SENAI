//Desenvolva uma programação que peça ao usuário para digitar o ano do seu nascimento no formato (YYYY) e o ano atual também no formato (YYYY).
//Em seguida mostre na tela qual a idade do usuário em anos, em meses, em dias e em semanas. 

let anoQueNasceu, nomeUsuario
let anoAtual
let idadeUsuario
let calculoIdadeMes, calculoIdadeSemana, calculoIdadeDias

nomeUsuario = prompt('Qual seu nome? ')
anoQueNasceu = Number(prompt('Qual o ano que vc nasceu?(usar formato(YYYY))'))
anoAtual = Number(prompt('Qual o ano atual?(usando o mesmo foramto)'))

idadeUsuario = anoAtual - anoQueNasceu
calculoIdadeMes = idadeUsuario * 12
calculoIdadeSemana = calculoIdadeMes * 4
calculoIdadeDias = idadeUsuario * 365

alert(nomeUsuario + ' tem ' + idadeUsuario + 'anos de vida' + ' e ' + calculoIdadeMes + ' meses de vida, ' + calculoIdadeSemana + ' semanas de vida ' + ' e ' + calculoIdadeDias + ' dias de vida.')

