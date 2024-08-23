programa {
  funcao inicio() {
    /* Fazer um programa no qual o usuário deve montar uma salada de frutas com uma cereja no final.
    Deve ser perguntado em sequência “Qual fruta adicionar? “. Quando for adicionado a cereja, mostrar a frase
    “Sua salada de frutas está pronta!” */

    cadeia FrutaColocada

    enquanto(FrutaColocada != "cereja"){

      escreva("Qual fruta adicionar?")
      leia(FrutaColocada)

    }se(FrutaColocada == "cereja"){
      escreva("Sua sala de frutas está pronta!")
    }

  }
}
