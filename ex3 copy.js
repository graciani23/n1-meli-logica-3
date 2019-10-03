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

// for (const item in animal) {
//     console.log(item)
// }

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

console.log(pokemon)
// 5.
// Adicione um método chamado
// `action` ao seu pokemon
// que retorna randomicamente uma
// das Strings "FIGHT", "BAG" ou "RUN".
pokemon.action = function() {
    const acoes = ['fight', 'bag', 'run']
    let randomItem = acoes[Math.floor(Math.random()*acoes.length)];
    console.log(`A ação é ${randomItem}`)
}
pokemon.action()

// 6.
// Adicione um método chamado
// `pergunta` ao seu pokemon que printa
// no console "O que o  < > vai fazer?" e
// retorna o resultado do metodo
// `acao`.

// 7.
// Printe todas as propriedades
// do seu pokemon no console.

// 8.
// Printe todas as propriedades
// e seus respectivos valores no
// console no seguinte formato:
// <propriedade>: <valor

//9 Faça uma função construtora de pokemon
