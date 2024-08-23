/* Crie um vetor de 10 números e peça para o usuário qual número ele deseja verificar se existe no vetor. 
Caso exista, o programa deve mostrar todos os índices que ele se encontra.

icas: Use dois vetores - Use um laços de repetição */

let numeros = [1, 5, 6, 7, 2, 4 ,9, 5, 8, 3, 4, 6, 5, 1, 2, 8, 3, 6, 4, 10, 5, 6, 7, 8, 4, 10]
let indices = []
let numeroDigitado



numeroDigitado = Number(prompt('Digite um numero pra ver se ele existe no vetor(1 a 10)'))

let numeroExiste = numeros.includes(numeroDigitado)
let queIndiceONumeroTa = numeros.indexOf(numeroDigitado)

while(queIndiceONumeroTa != -1){
    indices.push(queIndiceONumeroTa)
    queIndiceONumeroTa = numeros.indexOf(numeroDigitado, queIndiceONumeroTa + 1)
}

if(numeroExiste = true){
    alert(indices)
}else if(numeroExiste = false){
    alert('Não existe pai')
}

