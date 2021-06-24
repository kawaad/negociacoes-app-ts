import { Negociacao } from "./negociacao.js";

//Array<Negociacao>
//is equal to:
//Negociacao[]

//ReadonlyArray<Negociacao>
//is equal to:
//readonly Negociacao[]

export class Negociacoes {
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    lista(): readonly Negociacao[] {
        return this.negociacoes;
    }
}

// const negociacoes = new Negociacoes();
// negociacoes.lista().forEach(n => {
//     n.quantidade;
// });