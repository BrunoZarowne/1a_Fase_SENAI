// Criar um sistema clássico de jogos Tower Defense (Defesa de Torre) de acordo com a imagem disponibilizada. A Torre começa com estrutura em 100
//e o usuário pode destruir ou construir, digitando valores nos campos e clicando nos botões de menos e mais. O valor de estrutura deve ser
//atualizadoapós destruir ou construir.

//A situação da Torre começa como Ativa, mas caso sua estrutura chegue em zero ou abaixo, atualizar a situação para "Destruída".

let estrutura = 100
let estruturaTorre = document.getElementById('vidaTorre')
let situaçãoDaTorre = document.getElementById('situaçãoTorre')
let valorDigitado = document.getElementById('valor')

function atualizarEstrutura() {
    estruturaTorre.textContent = estrutura
    if(estrutura <= 0){
        situaçãoDaTorre.textContent = 'Destruida'
        situaçãoDaTorre.style.color = 'red'
    }else{
        situaçãoDaTorre.textContent = 'Ativa'
        situaçãoDaTorre.style.color = 'green'
    }
}

function destruir(){
    let valor = Number(valorDigitado.value)
    estrutura -= valor
    atualizarEstrutura()
}
function construir(){
    let valor = Number(valorDigitado.value)
    estrutura += valor
    atualizarEstrutura()
}
atualizarEstrutura()