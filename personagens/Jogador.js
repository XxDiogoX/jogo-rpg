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

    

    atacarInimigo(inimigo){
        if(inimigo instanceof Inimigo){
            this.atacar(inimigo);
        }else{
            console.log("Você não pode atacar, porquê não um inimigo!");
        }

    }
}