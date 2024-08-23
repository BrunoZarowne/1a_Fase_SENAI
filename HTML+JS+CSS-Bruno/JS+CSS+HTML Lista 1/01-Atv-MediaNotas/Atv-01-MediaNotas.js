//Criar um projeto com HTML e JS, onde o usuário possa digitar três notas (inputs) e clicar em um botão para calcular a média (mostrar por alert).

let valorNotaUm = document.getElementById('NotaUm')
let valorNotaDois = document.getElementById('NotaDois')
let valorNotaTres = document.getElementById('NotaTres')
let mediaDasNotas

function somarNotas(){
    mediaDasNotas = (Number(valorNotaUm.value) + Number(valorNotaDois.value) + Number(valorNotaTres.value)) / 3
    switch(true){
        case mediaDasNotas >= 0 && mediaDasNotas <= 5:
            alert('Sua nota não ficou na media!\nVoce tera que fazer a recuperação')
        break

        case mediaDasNotas > 5 && mediaDasNotas <= 7:
            alert('Voce ficou na média parabens!')
        break

        case mediaDasNotas > 7 && mediaDasNotas <= 9:
            alert('Voce ficou com uma nota muito alta fantástico!')
        break

        case mediaDasNotas > 9:
            alert('Parabens vc tirou 10 fantástico!!!')
        break
    }
}



