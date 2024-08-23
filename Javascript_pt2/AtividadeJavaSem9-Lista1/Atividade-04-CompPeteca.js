//Numa competição de arremesso de peteca, o competidor tem direito a 3 arremessos para que a peteca caia em um alvo
//com áreas e pontuações de 0 a 5, sendo 5 no centro e 0 fora do alvo. Faça um programa que pergunte a pontuação de cada
//arremesso e ao final mostre o resultado (soma dos pontos) e a classifição: 15 pontos (deus da peteca), de 14 a 10 (petequeiro profissa),
//de 9 a 5 (petequeiro de final de semana), de 4 a 1 (pseudo-petequeiro) e 0 pontos (nunca petequeiro).

let pontuacaoUm, pontuacaoDois, pontuacaoTres
let somaPontuacao

pontuacaoUm = Number(prompt('Qual foi a pontuação do primeiro arremesso? (0-5)'))
pontuacaoDois = Number(prompt('Qual foi a pontuação do segundo arremesso? (0-5)'))
pontuacaoTres = Number(prompt('Qual foi a pontuação do terceiro arremesso? (0-5)'))

somaPontuacao = pontuacaoUm + pontuacaoDois + pontuacaoTres

switch(true){

    case somaPontuacao == 15:
        alert('Deus da peteca!!!')
        break

    case somaPontuacao < 15 && somaPontuacao >= 10:
        alert('Petequeiro profissa')
        break

    case somaPontuacao <= 9 && somaPontuacao >= 5:
        alert('Petequeiro de final de semana')
        break

    case somaPontuacao <= 4 && somaPontuacao >= 1:
        alert('Pseudo-petequeiro')
        break

    case somaPontuacao == 0:
        alert('Não é pra voce irmão')
        break


}