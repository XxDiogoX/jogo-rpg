import { Jogador } from "./Jogador.js";
import { Personagem } from "./Personagem.js";

export class Inimigo extends Personagem{
    constructor(nome,hp,ataque,defesa,raca){
        super(nome,hp,ataque,defesa)
        this._raca = raca;
    }

    atacarJogador(jogador){
        if(jogador instanceof Jogador){
            this.atacar(jogador);
        }
    }

}