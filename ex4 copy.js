// 1- Crie uma função construtora para Terreno, cada terreno deve ter:
// largura, comprimento, area(largura x comprimento)
function Terreno(largura, comprimento) {
    this.largura = largura;
    this.comprimento = comprimento;
    this.area = largura * comprimento
}

// 2 crie métodos usando o prototype, eles devem ser:
// - calcularPreco -> que vai ser a area x 1000 reais.
// - mostrarInfos -> que mostrar a area e o preço do terreno.
Terreno.prototype.calcularPreco = function() {
    this.preco = this.area * 1000
}

Terreno.prototype.mostrarInfos = function() {
    console.log(`A área do terreno é ${this.area} e o preço é R$ ${this.preco}`)
}

// 3 - Crie 5 instancias do terreno, usando o operador new. ex: const t1 = new Terreno(arg1, arg2)
const t1 = new Terreno(10, 20)
const t2 = new Terreno(12, 20)
const t3 = new Terreno(15, 20)
const t4 = new Terreno(20, 20)
const t5 = new Terreno(20, 24)


// 4 - use a função calcular preco para que todas as instancias tenham seus precos.
t1.calcularPreco()
t2.calcularPreco()
t3.calcularPreco()
t4.calcularPreco()
t5.calcularPreco()


// 5 - crie uma array vazia chamada terrenos.
const Terrenos = []

// 6 - insira as instancias criadas(que os precos já tenham sido calculados) na array terrrenos.
Terrenos.push(t1, t2, t3, t4, t5)


// 7 - Imprima na tela o último terreno da array terrenos.
console.log(Terrenos[Terrenos.length-1])
// 8 - Imprima a area do terceiro item da array terrenos
console.log(Terrenos[2].area)

// 9 - Usando um loop, execute o método mostrarInfos de todos os terrenos.

// for (const item of Terrenos) {
//     console.log(item.mostrarInfos())
// }

// 10 - Crie uma função que vai receber a array de objetos e vai ordenar a lista do mais barato para o mais caro.

function ordenaTerrenos(arrTerrenos) {
    const ordenados = arrTerrenos.sort(function(a, b) {
        return a.preco - b.preco
    })
    console.log(ordenados)
}
ordenaTerrenos(Terrenos)

// 11 - Crie uma função que Imprima o mais barato
function maisBarato(arrTerrenos) {
    console.log(arrTerrenos[0])
}
maisBarato(Terrenos)

// 12 - Crie uma função que Imprima o mais caro.
function maisCaro(arrTerrenos) {
    console.log(arrTerrenos[arrTerrenos.length-1])
}
maisCaro(Terrenos)
