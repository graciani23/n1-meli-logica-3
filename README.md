# n1-meli-logica-3
N1 | BackEnd | 2019 | Semana 4 | Lógica 3 | Mercado Livre


# Aula 1 

## Arrays 

Uma array é uma coleção ordenada de itens, onde cada item tem um índice(index). 
     
    const arr = ['esse é primeiro elemento', 'segundo elemento', 'último elemento'];

    console.log(arr[0]);              // logs 'esse é primeiro elemento'
    console.log(arr[1]);              // logs 'segundo elemento'
    console.log(arr[arr.length - 1]); // logs 'último elemento'
 
    *arrays em JavaScript tem o índice começando no zero.*  


   Arrays podem conter vários tipos de dados
```    
   const variavel = 'abc'
   const misturado = ['1', 2, 'três', false, variavel, 5.6];
   console.log(misturado) // logs ["1", 2, "três", false, "abc", 5.6]
```

#### métodos de Arrays

Objetos do tipo Array contém, além da propriedade length, inúmeras outras propriedades que se referem à valores de função(métodos).

Existem vários métodos já prontinhos que o JS nos dá 
para manipular dados de arrays. Eles são extremamente úteis e 
muito utilizados no dia-a-dia de pessoas desenvolvedoras. 

Alguns exemplos: 
concat, pop, join, push, split, splice, reverse, slice, indexof, typeof, trim... 

# Aula 2

## Array bidimensionais 
São arrays que contém arrays. 
 
Arrays com duas dimensões costumam ser utilizados para representar tabelas de valores que consistem nas informações dispostas em *linhas* e *colunas*. Para identificar um elemento da tabela particular, devem ser especificados dois índices. Por convenção, o primeiro identifica a linha do elemento e o segundo, sua coluna.
```
const array = [
    ['apple', 'orange', 'pear'],
    ['maça', 'laranja', 'pera'],
    ['cookies', 'cake', 'muffins', 'pie']
];

console.log(array[0][0]) // logs 'apple'
```

Arrays multidimensionais
```
const x = [1,[2,3], [4,[5,[6,7,8]]], [9,[10,11,[12,13]]]];

console.log(x[2][1][1])  // logs [6, 7, 8]
```  

# Aula 3 

## Objetos 

  Um objeto é uma coleção de propriedades, e uma propriedade é uma associação entre um nome (ou chave)e um valor. Um valor de propriedade pode ser uma função, que é então considerada um *método* do objeto. 

#### Criando um objeto:

``` 
    const pessoa = {};
    pessoa.nome = 'jonas'
    pessoa.idade = 29 

    console.log(pessoa) // logs {nome: "jonas", idade: 29}
```


#### Adicionando um método:

````
pessoa.falar = function() {
console.log(`Oi, meu nome é ${pessoa.nome} eu tenho ${pessoa.idade} anos.`)
}

console.log(pessoa.falar()) // Oi, meu nome é jonas eu tenho 29 anos.
````

Temos então a seguinte estrutura chave-valor:
```
    pessoa = {
        nome: 'jonas', 
        idade: 29, 
        falar: function() {
            console.log(`Oi, meu nome é ${pessoa.nome} eu tenho ${pessoa.idade} anos.`)
        }
    } 
```

#### Acessando objetos 

Dot notation vs Bracket notation 
````
    pessoa.nome // jonas
    pessoa['nome'] // jonas 
````

Por padrão prefira usar o '.' ou dot notation, é mais fácil de ler e mais rápido de escrever.
Apenas em alguns caso específicos usamos os brackets(colchetes). Por exemplo, quando a propriedade começa com número ou for uma string que tenha mais de um nome (ex: 'thank-you'). 

* `Object.keys` -
Esse método retorna um array com todos os nomes ("chaves") de propriedades próprios de um objeto.

* `for...in` loops
Esse método caminha por todas as propriedades enumeráveis de um objeto.

* `Object.hasOwnProperty(nome-da-propriedade)`
checa se o Objeto tem x propriedade e retorna true ou false. 

# Aula 4 e 5 


#### This 

O que é __this__? 
A palavra chave this se refere ao objeto que ela pertence. 

Ela tem diferentes valores dependendo de onde é usada: 
- Sozinha, ela se refere ao objeto global. 
- Em uma função, this se refere ao objeto global 
- Em uma função, no modo strict, this é undefined. 
- Em um evento, this se refere ao elemento que recebeu o evento. 

__Em um método__ 'this' faz referencia ao proprio objeto 
````
    var obj = {
        firstName: 'joao', 
        lasName: 'melão'

        fullName : function() {
            return this.firstName + " " + this.lastName;
        }
    }

    obj.fullName() // logs joao melão 
````

#### Função Construtora

Um construtor nada mais é do que uma função. Ela pode ser executada como uma função ou pode ser utilizada para __instanciar__ um objeto utilizando a palavra reservada new.

```
function Categoria(nome) {
    this.nome = nome;
}

const categoria = new Categoria('Livros');
```

__Ao executar a função Categoria com new estamos fazendo quatro coisas:__

* criamos um novo objeto JavaScript ({});
* definimos o construtor do objeto categoria como Categoria – definindo também o tipo dele (retornado no instanceof);
* definimos o protótipo do objeto categoria como Categoria.prototype;
* executamos a função Categoria dentro do escopo do novo objeto, criando assim uma nova instância.

```
function Pessoa(nome, age, profissao) {
  this.nome = nome;
  this.age = age;
  this.profissao = profissao;
}

Pessoa.prototype.falar = function() {
    console.log("HELLO")
}
const friend = new Pessoa('laura', 28, 'desenvolvedora');

```
Também existe a palavra chave class 
```
class Pessoa {
    constructor(nome, idade){
        this.nome= nome;
        this.idade=idade;
    }

    falar() {
        console.log('oi')
    }
}
```

## Estruturas de dados complexas 
````
const complex = [
    {user:234, name: 'Marcia', idade:40, hobbies: ['dançar', 'comer', 'falar']},
    {user:235, name: 'Lorena', idade:20, hobbies: ['dançar', 'assistir tv', 'estudar']},
    {user:236, name: 'Patricia', idade:24, hobbies: ['correr', 'acampar', 'surfar']},
    {user:237, name: 'Mariana', idade:15, hobbies: ['skate', 'bicicleta', 'break dance']},
    {user:238, name: 'Isis', idade:34, hobbies: ['ler', 'escrever', 'discutir']},
    {user:239, name: 'Pietra', idade:23, hobbies: ['jogar dominó', 'sinuca', 'cartas']}
]
````

### Extra: 

Map, filter, Reduce, forEach 

- https://desenvolvimentoparaweb.com/javascript/map-filter-reduce-javascript/
- https://medium.com/@programadriano/javascript-conhecendo-map-filter-e-reduce-ce072d8f0ec5]
- https://clovisdasilvaneto.github.io/explorando-javascript-filter-reduce-map-every-some-e-foreach/

__JSON (JavaScript Object Notation)__
 -  é um modelo para armazenamento e transmissão de informações no formato texto.

#### Links: 
- W3Schools Métodos de Arrays - https://www.w3schools.com/js/js_array_methods.asp
- Eloquente JavaScript - http://braziljs.github.io/eloquente-javascript/chapters/estrutura-de-dados/
- MDN Arrays - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
- MDN Objetos - https://developer.mozilla.org/pt-BR/docs/Aprender/JavaScript/Objetos/B%C3%A1sico
- Clean Code



