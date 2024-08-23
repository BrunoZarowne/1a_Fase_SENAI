//Você é um ciclista profissional e pretende participar da competição "Volta à Ilha de Bike", revezamento em equipes, com equipes de 4 integrantes.
//O percurso tem um total de 140km, sendo dividido em 4 partes: Trecho 1 Av. Beira-Mar até Cachoeira do Bom Jesus (30km), Trecho 2 Cachoeira do Bom
//Jesus até Lagoa da Conceição (45km), Trecho 3 Lagoa da Conceição até Pântano do Sul (30km), Trecho 4 Pântano do Sul até Av. Beira-Mar (35km).
//Criar um programa que recebe o nome da equipe, em seguida o nome de cada um dos 4 integrantes e o tempo em horas que gastou pedalando o seu trecho.
//Ao final mostrar a velocidade média de cada trecho e a velocidade média geral (total dos 4 trechos) com duas casas após a vírgula. Se a velocidade
//média geral ficar abaixo de 15km/h mostrar uma mensagem "Desempenho pode melhorar bastante!", caso a velocidade média fique de 15 a 18km/h mostrar
//uma mensagem "Desempenho bom, mas ainda pode melhorar!" e se a média ficar acima de 18km/h mostrar uma mensagem "Desempenho excelente. Parabéns!"

let nomeEquipe, integranteUm, integranteDois, integranteTres, integranteQuatro
let tempoIntegranteUm, tempoIntegranteDois, tempoIntegranteTres, tempoIntegranteQuatro
let mediaTempoUm, mediaTempoDois, mediaTempoTres, mediaTempoQuatro, mediaTempoGeral

nomeEquipe = prompt('Poderia me falar o nome da sua equipe? ')
integranteUm = prompt('Poderia me falar o nome do primeiro integrante? ') //fez o trecho de 30Km
integranteDois = prompt('Poderia me falar o nome do segundo integrante? ') //fez o trecho de 45Km
integranteTres = prompt('Poderia me falar o nome do terceiro integrante? ') // fez o trecho de 30Km
integranteQuatro = prompt('Poderia me falar o nome do quarto integrante? ') //fez o trecho de 35Km

alert('E agora me diga o tempo que cada participante do grupo levou pra terminar seu trecho')

tempoIntegranteUm = Number(prompt('Quanto tempo o ' + integranteUm + ' levou pra terminar seu trecho? (em horas)'))
tempoIntegranteDois = Number(prompt('Quanto tempo o ' + integranteDois + ' levou pra terminar seu trecho? (em horas)'))
tempoIntegranteTres = Number(prompt('Quanto tempo o ' + integranteTres + ' levou pra terminar seu trecho? (em horas)'))
tempoIntegranteQuatro = Number(prompt('Quanto tempo o ' + integranteQuatro + ' levou pra terminar seu trecho? (em horas)'))

mediaTempoUm = 30 / tempoIntegranteUm
mediaTempoDois = 45 / tempoIntegranteDois
mediaTempoTres = 30 / tempoIntegranteTres
mediaTempoQuatro = 35 / tempoIntegranteQuatro
mediaTempoGeral = mediaTempoUm + mediaTempoDois + mediaTempoTres + mediaTempoQuatro / 4

alert('A media de velocidade no trecho da Av. Beira-Mar até Cachoeira do Bom Jesus foi de: ' + mediaTempoUm.toFixed(2) + 'Km/h.')
alert('A media de velocidade no trecho da Cachoeira do Bom Jesus até Lagoa da Conceição foi de: ' + mediaTempoDois.toFixed(2) + 'Km/h.')
alert('A media de velocidade no trecho da Lagoa da Conceição até Pântano do Sul foi de: ' + mediaTempoTres.toFixed(2) + 'Km/h.')
alert('A media de velocidade no trecho do Pântano do Sul até Av. Beira-Mar foi de: ' + mediaTempoQuatro.toFixed(2) + 'Km/h.')
alert('A media de velocidade de todos os trechos foi de: ' + mediaTempoGeral.toFixed(2) + 'Km/h.')

if(mediaTempoGeral < 15){
    alert('Desempenho pode melhorar bastante!')
}else if(mediaTempoGeral >= 15 && mediaTempoGeral <= 18){
    alert('Desempenho bom, mas ainda pode melhorar!')
}else if(mediaTempoGeral > 18){
    alert('Desempenho excelente. Parabéns!')
}


