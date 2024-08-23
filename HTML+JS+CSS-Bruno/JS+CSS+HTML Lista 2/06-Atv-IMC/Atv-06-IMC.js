//Criar um sistema (de acordo com a imagem) onde o usuário digite seu peso e altura, seja calculado o IMC (peso / altura * altura).
//Mostrar no campo de IMC o valor do IMC com duas casas após a vírgula, e no campo resultado o resultado de acordo com a tabela abaixo.

//IMC menor que 15 -> "Muito abaixo do Peso"
//IMC igual ou maior que 15 e menor que 18 -> "Abaixo do Peso"
//IMC igual ou maior que 18 e menor que 25 -> "Peso Adequado"
//IMC igual ou maior que 25 e menor que 28 -> "Acima do Peso"
//IMC igual ou maior que 28 -> "Muito acima do Peso"


function calculoIMC(){
    let peso = document.getElementById('inputPeso')
    let altura = document.getElementById('inputAltura')
    let resultado = document.getElementById('inputResultadoIMC')
    let situacao = document.getElementById('inputSituacaoPessoa')
    let resultadoCalculo

    resultadoCalculo = Number(peso.value) / ((Number(altura.value) / 100) * 2)

    switch(true){
        case resultadoCalculo < 15:
            situacao.textContent == 'Muito abaixo do Peso'
        break
        
        case resultadoCalculo >= 15 && resultadoCalculo < 18:
            situacao.value = 'Abaixo do Peso'
        break

        case resultadoCalculo >= 18 && resultadoCalculo < 25:
            situacao.value = 'Peso Adequado'
        break

        case resultadoCalculo >= 25 && resultadoCalculo < 28:
            situacao.value = 'Acima do Peso'
        break

        case resultadoCalculo >= 28:
            situacao.value = 'Muito acima do Peso'
        break

        default:
            situacao.value = 'Tu é o Godzilla mano'
    }
        resultado.value = resultadoCalculo.toFixed(2)
}


/*
    */

    /*if(resultado < 15){
    situacao.value == 'Muito abaixo do Peso'
    }else if(resultado >= 15 && resultado < 18){
        situacao.value == 'Abaixo do Peso'
    }else if(resultado >= 18 && resultado < 25){
        situacao.value == 'Peso Adequado'
    }else if(resultado >= 25 && resultado < 28){
        situacao.value == 'Acima do Peso'
    }else if(resultado >= 28){
        situacao.value == 'Muito acima do Peso'
    }else{
        situacao.value == 'Tu é o Godzilla mano'
    }*/