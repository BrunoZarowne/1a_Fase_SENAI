//Um nutricionista precisa controlar a dieta para pacientes celíacos (intolerantes à glúten) e pacientes com intolerância à lactose.
//Criar um programa onde o paciente deve digitar seu nome e em seguida responder se é celíaco (primeira pergunta) e se é intolerante
//à lactose (segunda pergunta). Validar as respostas de SIM e NÃO para letras maiúsculas e minúsculas. Em seguida coletar os dados de
//3 alimentos, sendo digitado o nome do alimento, se ele contém glúten ou não e se ele contém lactose ou não. Ao final, informar se o
//paciente pode comer os 3 alimentos digitados "Dieta adequada!" ou não pode "Dieta inadequada, contém alimentos aos quais o paciente é intolerante!".

let nomeUsuario
let respostaPerguntaUm, respostaPerguntaDois
let primeiroResposta = false, segundaResposta = false
let nomeAlimentoUm, nomeAlimentoDois, nomeAlimentoTres
let alimentoUmGluten = false, alimentoDoisGluten = false, alimentoTresGluten = false
let alimentoUmLactose = false, alimentoDoisLactose = false, alimentoTresLactose = false

nomeUsuario = prompt('Qual seu nome? ')
respostaPerguntaUm = prompt('Voce é intolerante a gluten? ')
if(respostaPerguntaUm == 'Sim' || respostaPerguntaUm == 'SIM' || respostaPerguntaUm == 'sim'){
    primeiroResposta = true
}else if(respostaPerguntaUm == 'Não' || respostaPerguntaUm == 'NÃO' || respostaPerguntaUm == 'não'){
    primeiroResposta = false
}
respostaPerguntaDois = prompt('Voce é intolerante a lactose? ')

if(respostaPerguntaDois == 'Sim' || respostaPerguntaDois == 'SIM' || respostaPerguntaDois == 'sim'){
    segundaResposta = true
}else if(respostaPerguntaDois == 'Não' || respostaPerguntaDois == 'NÃO' || respostaPerguntaDois == 'não'){
    primeiroResposta = false
}

alert('Agora me fala o nome de 3 alimento que vc quer comer e se eles contem gluten ou lactose')
nomeAlimentoUm = prompt('Qual o nome do primeiro alimento? ')
alimentoUmGluten = prompt('Esse alimento possui gluten? ')
alimentoUmLactose = prompt('Esse alimento possui lactose? ')

nomeAlimentoDois = prompt('Qual o nome do segundo alimento? ')
alimentoDoisGluten = prompt('Esse alimento possui gluten? ')
alimentoDoisLactose = prompt('Esse alimento possui lactose? ')

nomeAlimentoTres = prompt('Qual o nome do terceiro alimento? ')
alimentoTresGluten = prompt('Esse alimento possui gluten? ')
alimentoTresLactose = prompt('Esse alimento possui lactose? ')

//ALIMENTO UM

if(alimentoUmGluten === 'Sim' || alimentoUmGluten === 'SIM' || alimentoUmGluten === 'sim'){
    alimentoUmGluten = true
}else if(alimentoUmGluten === 'Não' || alimentoUmGluten === 'NÃO' || alimentoUmGluten === 'não'){
    alimentoUmGluten = false
}
if(alimentoUmLactose === 'Sim' || alimentoUmLactose === 'SIM' || alimentoUmLactose === 'sim'){
    alimentoUmLactose = true
}else if(alimentoUmLactose === 'Não' || alimentoUmLactose === 'NÃO' || alimentoUmLactose === 'não'){
    alimentoUmLactose = false
}

//ALIMENTO DOIS

if(alimentoDoisGluten === 'Sim' || alimentoDoisGluten === 'SIM' || alimentoDoisGluten === 'sim'){
    alimentoDoisGluten = true
}else if(alimentoDoisGluten === 'Não' || alimentoDoisGluten === 'NÃO' || alimentoDoisGluten === 'não'){
    alimentoDoisGluten = false
}
if(alimentoDoisLactose === 'Sim' || alimentoDoisLactose === 'SIM' || alimentoDoisLactose === 'sim'){
    alimentoDoisLactose = true
}else if(alimentoDoisLactose === 'Não' || alimentoDoisLactose === 'NÃO' || alimentoDoisLactose === 'não'){
    alimentoDoisLactose = false
}

//ALIMENTO TRES

if(alimentoTresGluten === 'Sim' || alimentoTresGluten === 'SIM' || alimentoTresGluten === 'sim'){
    alimentoTresGluten = true
}else if(alimentoTresGluten === 'Não' || alimentoTresGluten === 'NÃO' || alimentoTresGluten === 'não'){
    alimentoTresGluten = false
}
if(alimentoTresLactose === 'Sim' || alimentoTresLactose === 'SIM' || alimentoTresLactose === 'sim'){
    alimentoTresLactose = true
}else if(alimentoTresLactose === 'Não' || alimentoTresLactose === 'NÃO' || alimentoTresLactose === 'não'){
    alimentoTresLactose = false
}

if(primeiroResposta == true && segundaResposta== true && alimentoUmGluten == true && alimentoUmLactose == true && alimentoDoisGluten == true && alimentoDoisLactose == true && alimentoTresGluten == true && alimentoTresLactose == true){
     alert('Voce está com uma dieta inadequada, contém alimentos aos quais o paciente é intolerante!')
}else if(primeiroResposta == true && segundaResposta== false && alimentoUmGluten == true && alimentoUmLactose == false && alimentoDoisGluten == true && alimentoDoisLactose == false && alimentoTresGluten == true && alimentoTresLactose == false){
    alert('Voce está com uma dieta inadequada, contém alimentos aos quais o paciente é intolerante!')
}else if(primeiroResposta == false && segundaResposta== true && alimentoUmGluten == false && alimentoUmLactose == true && alimentoDoisGluten == false && alimentoDoisLactose == true && alimentoTresGluten == false && alimentoTresLactose == true){
    alert('Voce está com uma dieta inadequada, contém alimentos aos quais o paciente é intolerante!')
}else if(primeiroResposta == true && segundaResposta== true && alimentoUmGluten == false && alimentoUmLactose == false && alimentoDoisGluten == false && alimentoDoisLactose == false && alimentoTresGluten == false && alimentoTresLactose == false){
    alert('Voce está com uma dieta adequada!')
}else if(primeiroResposta == false && segundaResposta== false && alimentoUmGluten == true && alimentoUmLactose == true && alimentoDoisGluten == true && alimentoDoisLactose == true && alimentoTresGluten == true && alimentoTresLactose == true){
    alert('Voce está com uma dieta adequada!')
}else if(primeiroResposta == true && segundaResposta== false && alimentoUmGluten == false && alimentoUmLactose == false && alimentoDoisGluten == false && alimentoDoisLactose == false && alimentoTresGluten == false && alimentoTresLactose == false){
    alert('Voce está com uma dieta adequada!')
}else if(primeiroResposta == false && segundaResposta== true && alimentoUmGluten == true && alimentoUmLactose == true && alimentoDoisGluten == true && alimentoDoisLactose == true && alimentoTresGluten == true && alimentoTresLactose == true){
    alert('Voce está com uma dieta adequada!')
} 