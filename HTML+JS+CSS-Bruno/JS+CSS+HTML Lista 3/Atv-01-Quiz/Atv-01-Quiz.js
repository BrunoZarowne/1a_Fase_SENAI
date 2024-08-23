//Criar um Quiz (print anexo) com 3 perguntas, cada qual contendo uma resposta correta e as outras incorretas (select).
//A resposta correta soma 1 ponto, incorreta não. Selecionar a forma na qual será mostrada ALERT, INPUT ou DIV a pontuação
//(configurar os radios para que o usuário consiga selecionar somente um). Ao clicar no botão de resultado, o resultado
//(total de pontos) deve ser mostrado da forma escolhida somente se o checkbox estiver marcado, caso contrário,
//mostrar mensagem para o usuário avisando que deve marcar o checkbox.

let varSelect1 = document.getElementById('Pergunta1')
let varSelect2 = document.getElementById('Pergunta2')
let varSelect3 = document.getElementById('Pergunta3')

let varRadio1 = document.getElementById('rad1')
let varRadio2 = document.getElementById('rad2')
let varRadio3 = document.getElementById('rad3')

let calculoDoResultado

let varCheckBox = document.getElementById('check1')

let varResultadoLabel = document.getElementById('respostaLabel')

let varResultado = document.getElementById('resultado')




function resultado(){
    if(varRadio1.checked && varCheckBox.checked){
    calculoDoResultado = Number(varSelect1.value) + Number(varSelect2.value) + Number(varSelect3.value)
    alert('Seu total de pontos é: ' + calculoDoResultado)
    }else if(varRadio1.checked){
        alert('Selecione a caixa para ver seus resultados')
    }
    if(varRadio2.checked && varCheckBox.checked){
        calculoDoResultado = Number(varSelect1.value) + Number(varSelect2.value) + Number(varSelect3.value)
            varResultado.value = calculoDoResultado
        }else if(varRadio2.checked){
            alert('Selecione a caixa para ver seus resultados')
        }
    if(varRadio3.checked && varCheckBox.checked){
        calculoDoResultado = Number(varSelect1.value) + Number(varSelect2.value) + Number(varSelect3.value)
        varResultadoLabel.textContent = calculoDoResultado
        }else if(varRadio3.checked){
            alert('Selecione a caixa para ver seus resultados')
    }
}