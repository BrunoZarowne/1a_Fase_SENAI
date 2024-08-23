//As baleias da Groenlândia estão entre os animais que vivem mais tempo na Terra, em média 200 anos. A reprodução se dá a cada 4 anos, tendo somente 1 filhote por vez.
//Programar um sistema que calcule o total de filhotes ao longo da vida e a média de filhotes de uma baleia dessa espécie por década

let tempoDeVidaBaleias = 200
let tempoDeReproducao = 4
let mediaDeFilhotePorDecada
let mediaDeFilhotePelaVidaToda

mediaDeFilhotePorDecada = 10 / tempoDeReproducao
mediaDeFilhotePelaVidaToda = tempoDeVidaBaleias / tempoDeReproducao

alert('Em média as baleias da Groelãândia tem ' + mediaDeFilhotePorDecada + ' filhotes por década.')
alert('\nAs baleia da Groelândia tem em média ' + mediaDeFilhotePelaVidaToda + ' filhotes por toda sua vida')

