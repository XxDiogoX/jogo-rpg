import { Personagem } from "./Personagem.js";

export class Inimigo extends Personagem{
    constructor(nome,hp,ataque,defesa,raca){
        super(nome,hp,ataque,defesa)
        this._raca = raca;
    }

}