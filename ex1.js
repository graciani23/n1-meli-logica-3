//1 - Dada a array const xx = [23, 43, 63 ,73, 83, 93, 102];
//Itere pela array imprimindo na tela todos os dados que incluem nela
/*
const xx = [23, 43, 63 ,73, 83, 93, 102, 12, 34, 1];
function ordena(n1, n2) {
    return n1>n2 ? 1 : n1 < n2 ? -1 : 0
}

xx.sort(ordena);
for (let i=0; i<xx.length; i++) {
    console.log(xx[i])
}
*/

// 2- Dada a array const doces = ['sorvete', 'pirulito', 'bombom'];
// Adicione um novo item de sua escolha no começo dessa array.
/*
const doces = ['sorvete', 'pirulito', 'bombom']
doces.unshift('trufa')
for (let i=0; i<doces.length; i++) {
    console.log(doces[i])
}
*/

// 3 Dada a array const doces = ['sorvete', 'pirulito', 'bombom'];
// Adicione um novo item de sua escolha no final dessa array.
/*
const doces = ['sorvete', 'pirulito', 'bombom'];
doces.push('trufa')
for (let i=0; i<doces.length; i++) {
    console.log(doces[i])
}
*/

//  4- Dada a array const bandasEmo = ['fresno', 'linkin park', 'blink182', 'dance of days'];
// inverta a ordem dos items e log na tela : 'dance of days', 'blink182', 'linking park', 'fresno'
/*
const bandasEmo = ['fresno', 'linkin park', 'blink182', 'dance of days'];
bandasEmo.reverse()
console.log(bandasEmo)
*/

// 5 - Dada a array const array = [23, 45, 13, 71];
// Insira o número 11 no meio, chegando ao output = 23, 45, 11, 13, 71
/*
const array = [23, 45, 13, 71];
array.splice(2, 0, 11)
console.log(array)
*/

//6-  Dada a array const array = [23, 45, 13, 17];
// Tire o número 45 da array.
/*
const array = [23, 45, 13, 17];
array.splice(1, 1)
console.log(array)
*/

// 7- Crie um Array de 10 valores, apenas com Números Ímpares.
// depois imprima os valores na tela
/*
const array = []
let cont = 0
for (let i=0; cont<10; i++) {
    if (i % 2 != 0) {
        array.push(i)
        cont ++
    }
}
console.log(array)
*/

// 8- Dada a array const x = [23, 43, 63 ,73, 83, 93, 102];
//Itere pela array somando mais 2 de cada item e crie uma nova array com os resultados gerados.
/*
const x = [23, 43, 63 ,73, 83, 93, 102];
let somar = 2
const y = []
for (let i=0; i<x.length; i++) {
    y.push(x[i] + somar)
}

console.log(y)
*/

// 9- dada a array const lista = [56, 89, 34, 12, 23, 55, 9]
// ordene a lista .

const lista = [56, 89, 34, 12, 23, 55, 9]
/*
function ordena(a, b) {
    return a>b ? 1 : a<b ? -1 : 0
}
lista.sort(ordena) 
for (let i=0; i<lista.length; i++) {
    console.log(lista[i])
}

lista.sort(function(a,b) {
    return a - b
})
console.log(lista)
*/
for (let i = 0; i < lista.length; i++) {
    for (let j = 0; j < lista.length; j++) {
        if (lista[j] > lista[j+1]) {
            const aux = lista[j]
            lista[j] = lista[j+1]
            lista[j+1] = aux
        }
    }
}
console.log(lista)

