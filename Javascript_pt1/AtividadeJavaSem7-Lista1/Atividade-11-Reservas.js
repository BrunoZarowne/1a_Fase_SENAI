//Um sistema de reservas de ingressos do cinema, que deve permitir que o usuário escolha o filme, o horário e o número de ingressos desejados.
//Após a seleção, deve ser
//exibido o total a ser pago. Exibir ao usuário opções de filmes e horários. Os valores do ingresso devem ser pré-definidos.

let valorIngressoUm = 10.00, valorIngressoDois = 15.00, valorIngressoTres = 20.00
let horarioUm = 14.25, horarioDois = 15.35, horarioTres = 16.45
let nomeFilmeUm = 'Batman o cavaleiro das trevas', nomeFilmeDois = 'Godzilla o rei dos monstros', nomeFilmeTres = 'Kung Fu panda 4'
let filmeSelecionado, qntsIngressosEscolhidos, horarioSelecionado
let calculoIngressoUm, calculoIngressoDois, calculoIngressoTres

alert('Olá boa noite estarei passando os filmes que temos essa noite')
alert('Aqui estão os filmes que temos: ' + '\nO primeiro sendo: ' + nomeFilmeUm + '\nEm segudia temos: ' + nomeFilmeDois + '\nE por ultimo temos: ' + nomeFilmeTres)

filmeSelecionado = prompt('\nQual filme voce deseja ver? ')

alert('Temos esses horarios livres pra esse filme: ' + '\nO primeiro horario sendo ás: ' + horarioUm + '\nO segundo sendo ás: ' + horarioDois + '\nO ultimo horario sendo ás: ' + horarioTres)

horarioSelecionado = Number(prompt('Qual será o horário selecionado? '))

if(filmeSelecionado == nomeFilmeUm && horarioSelecionado == horarioUm){
qntsIngressosEscolhidos = Number(prompt('O valor dos ingressos será de: ' + valorIngressoUm + ' vai querer qnts ingressos?'))
calculoIngressoUm = qntsIngressosEscolhidos * valorIngressoUm
alert('\nO filme escolhido foi ' + nomeFilmeUm + ' pro horário das ' + horarioUm + '\ncom o valor total dos ingressos sendo: ' + calculoIngressoUm)

}else if(filmeSelecionado == nomeFilmeUm && horarioSelecionado == horarioDois){
    qntsIngressosEscolhidos = Number(prompt('O valor dos ingressos será de: ' + valorIngressoDois + ' vai querer qnts ingressos?'))
    calculoIngressoDois = qntsIngressosEscolhidos * valorIngressoDois
    alert('\nO filme escolhido foi ' + nomeFilmeUm + ' pro horário das ' + horarioDois + '\ncom o valor total dos ingressos sendo: ' + calculoIngressoDois)    

}else if(filmeSelecionado == nomeFilmeUm && horarioSelecionado == horarioTres){
    qntsIngressosEscolhidos = Number(prompt('O valor dos ingressos será de: ' + valorIngressoTres + ' vai querer qnts ingressos?'))
    calculoIngressoTres = qntsIngressosEscolhidos * valorIngressoTres
    alert('\nO filme escolhido foi ' + nomeFilmeUm + ' pro horário das ' + horarioTres + '\ncom o valor total dos ingressos sendo: ' + calculoIngressoTres)    

}else if(filmeSelecionado == nomeFilmeDois && horarioSelecionado == horarioUm){
    qntsIngressosEscolhidos = Number(prompt('O valor dos ingressos será de: ' + valorIngressoUm + ' vai querer qnts ingressos?'))
    calculoIngressoUm = qntsIngressosEscolhidos * valorIngressoUm
    alert('\nO filme escolhido foi ' + nomeFilmeDois + ' pro horário das ' + horarioUm + '\ncom o valor total dos ingressos sendo: ' + calculoIngressoUm)
    
}else if(filmeSelecionado == nomeFilmeDois && horarioSelecionado == horarioDois){
        qntsIngressosEscolhidos = Number(prompt('O valor dos ingressos será de: ' + valorIngressoDois + ' vai querer qnts ingressos?'))
        calculoIngressoDois = qntsIngressosEscolhidos * valorIngressoDois
        alert('\nO filme escolhido foi ' + nomeFilmeDois + ' pro horário das ' + horarioDois + '\ncom o valor total dos ingressos sendo: ' + calculoIngressoDois)    
    
}else if(filmeSelecionado == nomeFilmeDois && horarioSelecionado == horarioTres){
        qntsIngressosEscolhidos = Number(prompt('O valor dos ingressos será de: ' + valorIngressoTres + ' vai querer qnts ingressos?'))
        calculoIngressoTres = qntsIngressosEscolhidos * valorIngressoTres
        alert('\nO filme escolhido foi ' + nomeFilmeDois + ' pro horário das ' + horarioTres + '\ncom o valor total dos ingressos sendo: ' + calculoIngressoTres)    
    
}else if(filmeSelecionado == nomeFilmeTres && horarioSelecionado == horarioUm){
    qntsIngressosEscolhidos = Number(prompt('O valor dos ingressos será de: ' + valorIngressoUm + ' vai querer qnts ingressos?'))
    calculoIngressoUm = qntsIngressosEscolhidos * valorIngressoUm
    alert('\nO filme escolhido foi ' + nomeFilmeTres + ' pro horário das ' + horarioUm + '\ncom o valor total dos ingressos sendo: ' + calculoIngressoUm)
    
}else if(filmeSelecionado == nomeFilmeTres && horarioSelecionado == horarioDois){
        qntsIngressosEscolhidos = Number(prompt('O valor dos ingressos será de: ' + valorIngressoDois + ' vai querer qnts ingressos?'))
        calculoIngressoDois = qntsIngressosEscolhidos * valorIngressoDois
        alert('\nO filme escolhido foi ' + nomeFilmeTres + ' pro horário das ' + horarioDois + '\ncom o valor total dos ingressos sendo: ' + calculoIngressoDois)    
    
}else if(filmeSelecionado == nomeFilmeTres && horarioSelecionado == horarioTres){
        qntsIngressosEscolhidos = Number(prompt('O valor dos ingressos será de: ' + valorIngressoTres + ' vai querer qnts ingressos?'))
        calculoIngressoTres = qntsIngressosEscolhidos * valorIngressoTres
        alert('\nO filme escolhido foi ' + nomeFilmeTres + ' pro horário das ' + horarioTres + '\ncom o valor total dos ingressos sendo: ' + calculoIngressoTres)    
    
}




