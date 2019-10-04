// const pessoa = {}
// pessoa.nome = 'jonas'
// pessoa.idade = 30
// pessoa.falar = function() {
//     console.log(`Meu nome é ${pessoa.nome}!`)
// }

// pessoa.falar()


// const curso = {}
// curso.nome = 'JavaScript'
// curso.cargaHoraria = 30
// curso.ano = 2019
// curso.concluir = function() {
//     console.log(`O curso de ${curso.nome} acontece em ${curso.ano} e possui ${curso.cargaHoraria} horas`)
// }
// curso.concluir()

// const animal = {}
// animal.nome = 'gato'
// animal.cor_de_pelo = 'preto-e-branco'

// // for (const item in animal) {
// //     console.log(item)
// // }

// for (const item in animal) {
//     console.log(item, animal[item])
// }

// animal.hasOwnProperty('nome')

// console.log(animal)
// console.log(animal.cor_de_pelo)
//objetos


// 1.
// Defina um objeto de
// Javascript que descreva
// um dos pokemons da lista
// de pokemons do Wikipedia.
// com pelo menos 4 propriedades e 1 método
// ref: https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon
const pokemon = {}
pokemon.nome = 'Pikachu'
pokemon.ev = 'Pichu'
pokemon.cor = 'Amarelo'
pokemon.acao = 'Thunderbolt'
pokemon.atacar = function() {
    console.log(`O ${pokemon.nome} pode usar o ataque ${pokemon.acao} `)
}

pokemon.atacar()
// 2.
// Printe no console a seguinte
// frase: "Oi, meu nome é  < >.
// e meu nome japones é < >."
const dados = {
    nome: 'Graciani',
    nomeJapa: 'Hitokage'
}
console.log(`Oi, meu nome é ${dados.nome} e meu nome em japonês é ${dados.nomeJapa}`)

// 3.
// Adicione uma nova propriedade ao
// seu pokemon chamada `s'abe_voar`
// (ou algo do tipo) e defina
// ela como `true` ou `false`.
pokemon.sabeVoar = false


// 4.
// Adicione um método ao seu pokemon
// chamado `voar` que retorna "Desculpa, nao sei voar." ou "
// To voaaaaaando!".

pokemon.voar = function() {
    if (pokemon.sabeVoar == true) {
        console.log('To voando!') 
    } else {
        console.log('Desculpa, não sei voar!') 
    }
}
pokemon.voar()

// 5.
// Adicione um método chamado
// `action` ao seu pokemon
// que retorna randomicamente uma
// das Strings "FIGHT", "BAG" ou "RUN".
pokemon.action = function() {
    const acoes = ['Fight', 'Bag', 'Run']
    let randomItem = acoes[Math.floor(Math.random()*acoes.length)];
    console.log(`A ação é ${randomItem}`)
}


// 6.
// Adicione um método chamado
// `pergunta` ao seu pokemon que printa
// no console "O que o  < > vai fazer?" e
// retorna o resultado do metodo
// `acao`.

for (const key in pokemo) {
    console.log(`Chave:${key}| valor:${pokemon[key]}`)
}


pokemon.pergunta = function() {
    console.log(`O que o ${pokemon.nome} vai fazer?`)
    return pokemon.action()
}
pokemon.pergunta()

// 7.
// Printe todas as propriedades
// do seu pokemon no console.
console.log(Object.keys(pokemon))
// 8.
// Printe todas as propriedades
// e seus respectivos valores no
// console no seguinte formato:
// <propriedade>: <valor
for (const item in pokemon) {
    console.log(item, pokemon[item])
}

//9 Faça uma função construtora de pokemon
//função construtora
function Pokemon(nome, nomeJapa, evolucao) {
    this.nome = nome
    this.nomeJapa = nomeJapa
    this.evolucao = evolucao
}

const pokemon1 = new Pokemon('charmander', 'Hitokage', 'ovo')
const pokemon2 = new Pokemon('Pikachu', 'Hitokage', 'ovo')

console.log(Pokemon)

const pokes = []
pokes.push(pokemon1, pokemon2)
console.log(pokes)

Pokemon.prototype.jogarBola = function() {
    console
}

// Array.prototype
// String.prototype.split = function() {
//     console.log("Não vou splitar nada")
// }

const complex = [
    {user:234, name: 'Marcia', idade:40, hobbies: ['dançar', 'comer', 'falar']},
    {user:235, name: 'Lorena', idade:20, hobbies: ['dançar', 'assistir tv', 'estudar']},
    {user:236, name: 'Patricia', idade:24, hobbies: ['correr', 'acampar', 'surfar']},
    {user:237, name: 'Mariana', idade:15, hobbies: ['skate', 'bicicleta', 'break dance']},
    {user:238, name: 'Isis', idade:34, hobbies: ['ler', 'escrever', 'discutir']},
    {user:239, name: 'Pietra', idade:23, hobbies: ['jogar dominó', 'sinuca', 'cartas']}
]
console.log(complex[complex.length-1].name)

const arr = [2, 4, 7, 9, 9].map(function(item){
    console.log(item + 3)
}) 

const palavras = ['oi', 'ola', 'hello'].map(function(item) {
    console.log(item.toUpperCase())
})