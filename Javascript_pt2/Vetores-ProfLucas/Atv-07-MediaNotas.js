//Criar uma lista com 6 notas, ao final realizar a média das notas descartando a primeira e a última. Mostra na tela a média.

let notasUsuario = [6, 7, 8, 4, 9]
let mediaNotas

notasUsuario.shift()
notasUsuario.pop()

console.log(notasUsuario)

mediaNotas = (notasUsuario[0] + notasUsuario[1] + notasUsuario[2]) / 3

alert(mediaNotas.toFixed(1))

if(notasUsuario[0] == notasUsuario[4]){}