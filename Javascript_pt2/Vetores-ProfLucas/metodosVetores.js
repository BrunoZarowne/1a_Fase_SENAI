//             0  1  2  3  4  5
let numeros = [1, 2, 3, 4, 5, 6]
//              0        1        2        3       4       5
let nomes = ['bruno', 'joao', 'arthur', 'josé', 'joao', 'bruno']

// push() -> adiciona elementos ao final do vetor

numeros.push(10)
console.log(numeros)

//popo() -> remove elementos do final do vetor

nomes.pop()
console.log(nomes)

//indexOf() ->retorna o indice da primeira vez que o elemento aparece ou -1 caso não exista

console.log(nomes.indexOf('joao'))

//includes() -> retorna true ou false de um elemento

console.log(nomes.includes('bruno'))
console.log(numeros.includes(5))

//splce() ->remove a partir do indice selecionado, e a quantdade pra remover e se pode ou n adicionar algo

console.log(nomes.splice(2, 1, 'abluble'))