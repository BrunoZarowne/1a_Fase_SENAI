//Criar um programa onde o usuário digite a sua data de nascimento e retorne a geração a qual ele pertence:

//Sem Geração (até 1945)
//Baby Boomers (nascidos entre 1946 e 1964)
//Geração X (1965-1980)
//Geração Y ou Millennials (1981-1996)
//Geração Z (1997-2010)
////Geração Alfa (a partir de 2011)

let dataNascimentoUsusario

dataNascimentoUsusario = Number(prompt('Digite o ano em que vc nasceu(exemplo 2006)'))

switch(true){

    case dataNascimentoUsusario <= 1945:
        alert('Sem Geração!')
        break

    case dataNascimentoUsusario > 1946 && dataNascimentoUsusario < 1964:
        alert('Baby Boomers!')

    case dataNascimentoUsusario > 1965 && dataNascimentoUsusario < 1980:
        alert('Geração X!')
        break

    case dataNascimentoUsusario > 1981 && dataNascimentoUsusario < 1996:
        alert('Geração Y ou Millenials!')
        break

    case dataNascimentoUsusario > 1997 && dataNascimentoUsusario < 2010:
        alert('Geração Z!')
        break

    case dataNascimentoUsusario >= 2011:
        alert('Geração Alfa!')

}