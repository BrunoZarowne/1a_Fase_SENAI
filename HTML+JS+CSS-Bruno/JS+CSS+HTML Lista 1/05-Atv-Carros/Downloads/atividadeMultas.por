programa {
  funcao inicio() {
    /* Desenvolver um programa no qual o usuário digite o número de multas que deseja cadastrar e para cada multa deve colocar
    o valor em reais e os pontos perdidos na carteira de habilitação. Ao final, mostrar o somatório das multas e dos pontos,
    caso os pontos alcancem 21 ou mais, exibir a mensagem “Você está irregular”, senão, exibir “Você está regular”. */

  inteiro NumeroMultas
  inteiro SomaMultas = 0
  real ValorMultas
  inteiro PontosPerdidos
  real SomaPontos = 0
  inteiro Contador = 0

  escreva("Quantas multas quer cadastrar? ")
  leia(NumeroMultas)

  enquanto(Contador < NumeroMultas){
    escreva("Qual o valor da multa? ")
    leia(ValorMultas)
    escreva("Quantos pontos foram perdidos? ")
    leia(PontosPerdidos)
    SomaMultas = SomaMultas + ValorMultas
    SomaPontos = SomaPontos + PontosPerdidos
    Contador++

  }se(SomaPontos >= 21){
    escreva("Voce está irregular ")
    escreva("\nValor total das multas: ", SomaMultas)
    escreva("\nValor total dos pontos perdidos: ", SomaPontos)
  }senao se(SomaPontos < 21){
    escreva("Voce está regular ")
    escreva("\nValor total das multas: ", SomaMultas)
    escreva("\nValor total dos pontos perdidos: ", SomaPontos)
  }
   



  }
}
