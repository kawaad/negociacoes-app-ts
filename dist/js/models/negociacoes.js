//Array<Negociacao>
//is equal to:
//Negociacao[]
//ReadonlyArray<Negociacao>
//is equal to:
//readonly Negociacao[]
export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
// const negociacoes = new Negociacoes();
// negociacoes.lista().forEach(n => {
//     n.quantidade;
// });
