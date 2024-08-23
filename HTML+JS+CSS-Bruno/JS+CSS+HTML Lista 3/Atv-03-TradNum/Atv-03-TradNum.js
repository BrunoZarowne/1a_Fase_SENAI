/* Criar um tradutor de números (De 1 a 5) de inglês para português, utilizando HTML e JS. O sistema deve seguir o modelo (print anexo).
Um número um inglês deve ser selecionado no select e quando for clicado no botão "Traduzir" a tradução dele deve ser mostrada no input
"Resultado", com uma mensagem em amarelo "Tradução efetuada. Caso nenhum número esteja selecionado, mostrar "Nenhuma opção escolhida". */

let varResultado = document.getElementById('Resultado')
let varNumSelecionado = document.getElementById('NumIngles')
let varOpSelecionad = document.getElementById('opSelecionada')

function traduzir(){
    if(varNumSelecionado.value == '0'){
        varOpSelecionad.value = 'Nenhuma opção escolhida'
    }else if(varNumSelecionado.value == '1'){
        varResultado.value = "Um"
        varOpSelecionad.textContent = 'Tradução efetuada'
    }else if(varNumSelecionado.value == '2'){
        varResultado.value = "Dois"
        varOpSelecionad.textContent = 'Tradução efetuada'
    }else if(varNumSelecionado.value == '3'){
        varResultado.value = "Tres"
        varOpSelecionad.textContent = 'Tradução efetuada'
    }else if(varNumSelecionado.value == '4'){
        varResultado.value = "Quatro"
        varOpSelecionad.textContent = 'Tradução efetuada'
    }else if(varNumSelecionado.value == '5'){
        varResultado.value = "Cinco"
        varOpSelecionad.textContent = 'Tradução efetuada'
    }
}