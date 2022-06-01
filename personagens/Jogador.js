import { Personagem } from "./Personagem.js";

export class Jogador extends Personagem{
    constructor(nome){
        super(nome);
        this._lv = 1;
        this._espada = "Nenhuma";
        this._armadura = "Nenhuma";
        this._escudo = "Nenhum";
        this._expParaProximoNivel = 200;

    }
}