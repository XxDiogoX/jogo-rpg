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

    get lv(){
        return this._lv;
    }

    set lv(level){
        this._lv = level;
    }
    
    get espada(){
        return this._espada;
    }

    set espada(espada){
        this._espada = espada;
    }

    get armadura(){
        return this._armadura;
    }

    set armadura(armadura){
        this._armadura = armadura;
    }

    get escudo(){
        return this._escudo;
    }

    set escudo(escudo){
        this._escudo = escudo;
    }

    get exp(){
        return this._expParaProximoNivel;
    }

    set exp(exp){
        this._expParaProximoNivel = exp;
    }

    atacarInimigo(inimigo){
        if(inimigo instanceof Inimigo){
            this.atacar(inimigo);
        }else{
            console.log("Você não pode atacar, porquê não um inimigo!");
        }

    }
}