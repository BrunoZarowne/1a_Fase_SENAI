//Desenvolver a lógica de perguntas / respostas / pontuação para um mini-quiz utilizando a estrutura condicional SWITCH / CASE.
//O quiz contém 4 perguntas com 4 respostas cada (conforme abaixo). Todas as respostas possuem uma pontuação específica.
//Realizar o cálculo da pontuação e mostrar ao final.

//1) Quais séries a seguir englobam melhor a temática de vampiros e assombração?
//A) Van Helsing (2 pontos)
//B) Castlevania (3 pontos)
//C) The Vampire Diaries (2 pontos)
//D) Blade: The Series (1 ponto)

//2) Dentre os livros abaixo, quais incluem melhor a temática de fantasia?
//A) Alice no País das Maravilhas (1 ponto)
//B) O Hobbit (1 ponto)
//C) A Fantástica Fábrica de Chocolates (1 ponto)
//D) Coraline (2 pontos)

//3) Quais das franquias listadas, representam melhor a empresa de jogos Nintendo?
//A) The Legend of Zelda (3 pontos)
//B) Kirby (2 pontos)
//C) Metroid (3 pontos)
//D) Super Mario Bros (2 pontos)

//4) Quais dos autores citados, representam melhor o gênero de livros de terror?
//A) Stephen King (2 pontos)
//B) Edgar Allan Poe (2 pontos)
//C) H.P. Lovecraft (2 pontos)
//D) Mary Shelley (1 ponto)

//Critérios de avaliação:
//(0,5) Criar uma tela (janela) inicial de boas vindas, explicando o quiz.
//(1,0) Validar para que respostas digitadas com letra minúscula (a, b, c, d) também somem os pontos.
//(1,0) Incluir uma validação para opções diferentes das alternativas, avisando a soma de 0 pontos.
//(0,5) Mostrar na tela ao final, quais foram as opções / respostas escolhidas em cada pergunta.
//(1,0) Mostrar os pontos ao final. Se conseguir pontuação máxima (10 pontos), incluir além da pontuação, uma mensagem "Parabéns!"

let respostaNumeroUm, respostaNumeroDois
let respostaNumeroTres, respostaNumeroQuatro
let valorPontosUm = 0, valorPontosDois = 0
let valorPontosTres = 0, valorPontosQuatro = 0
let somaTotalPontos

alert('Bem vindo ao quiz feito pelo grandissimo mestre Lucas\nAqui teremos diversas perguntas sobre a cultura geek\nAproveite e tente não queimar a cabeça!')

respostaNumeroUm = prompt('1) Quais séries a seguir englobam melhor a temática de vampiros e assombração?\nA) Van Helsing (2 pontos)\nB) Castlevania (3 pontos)\nC) The Vampire Diaries (2 pontos)\nD) Blade: The Series (1 ponto)').toUpperCase()

switch(respostaNumeroUm){
    case 'A':
        valorPontosUm = 2
        break
    case 'B':
        valorPontosUm = 3
        break
    case 'C':
        valorPontosUm = 2
        break
    case 'D':
        valorPontosUm = 1
        break
    default:
        valorPontosUm = 0
        alert('Voce digitou algo fora das opções dadas, logo não ganhara pontos')
}
 

respostaNumeroDois = prompt('2) Dentre os livros abaixo, quais incluem melhor a temática de fantasia?\nA) Alice no País das Maravilhas (1 ponto)\nB) O Hobbit (1 ponto)\nC) A Fantástica Fábrica de Chocolates (1 ponto)\nD) Coraline (2 pontos)').toUpperCase()

switch(respostaNumeroDois){
    case 'A':
        valorPontosDois = 1
        break
    case 'B':
        valorPontosDois = 1
        break
    case 'C':
        valorPontosDois = 1
        break
    case 'D':
        valorPontosDois = 2
        break
    default:
        valorPontosDois = 0
        alert('Voce digitou algo fora das opções dadas, logo não ganhara pontos')
}


respostaNumeroTres = prompt('3) Quais das franquias listadas, representam melhor a empresa de jogos Nintendo?\nA) The Legend of Zelda (3 pontos)\nB) Kirby (2 pontos)\nC) Metroid (3 pontos)\nD) Super Mario Bros (2 pontos)').toUpperCase()

switch(respostaNumeroTres){
    case 'A':
        valorPontosTres = 3
        break
    case 'B':
        valorPontosTres = 2
        break
    case 'C':
        valorPontosTres = 3
        break
    case 'D':
        valorPontosTres = 2
        break
    default:
        valorPontosTres = 0
        alert('Voce digitou algo fora das opções dadas, logo não ganhara pontos')
}

respostaNumeroQuatro = prompt('4) Quais dos autores citados, representam melhor o gênero de livros de terror?\nA) Stephen King (2 pontos)\nB) Edgar Allan Poe (2 pontos)\nC) H.P. Lovecraft (2 pontos)\nD) Mary Shelley (1 ponto)').toUpperCase()

switch(respostaNumeroQuatro){
    case 'A':
        valorPontosQuatro = 2
        break
    case 'B':
        valorPontosQuatro = 2
        break
    case 'C':
        valorPontosQuatro = 2
        break
    case 'D':
        valorPontosQuatro = 1
        break
    default:
        valorPontosQuatro = 0
        alert('Voce digitou algo fora das opções dadas, logo não ganhara pontos')
}

somaTotalPontos = valorPontosUm + valorPontosDois + valorPontosTres + valorPontosQuatro

 switch(true){

    case somaTotalPontos <= 9:
        alert('As opçoes escolhidas pelo usuario foram ' + respostaNumeroUm + ' ' + respostaNumeroDois+ ' ' + respostaNumeroTres+ ' ' + respostaNumeroQuatro + '\n com o total de pontos sendo de: ' + somaTotalPontos)
        break

    case somaTotalPontos == 10:
        alert('As opçoes escolhidas pelo usuario foram ' + respostaNumeroUm + ' ' + respostaNumeroDois+ ' ' + respostaNumeroTres+ ' ' + respostaNumeroQuatro + '\n com o total de pontos sendo de: ' + somaTotalPontos + '\nParabens voce conseguiu a pontuação maxima!!!')
        break
}

