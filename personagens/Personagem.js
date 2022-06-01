export class Personagem{

    constructor(nome,hp,ataque,defesa){
        //Class abstrata, somente para uso de herança
        if( this.constructor == Personagem){
            throw new Error ("Está classe não pode ser instanciada diretamente.")

        }else{
            this._nome = nome;
            this._hp = hp;
            this._ataque = ataque;
            this._defesa = defesa;
        }
        
    }

    get nome(){
        return this._nome;
    }

    get hp(){
        return this._hp;
    }

    set hp(valorHp){
        this._hp = valorHp;
    }

    get ataque(){
        return this._ataque;
    }

    set ataque(valorAtaque){
        this._ataque = valorAtaque;
    }

    get defesa(){
        return this._defesa;
    }

    set defesa(valorDefesa){
        this._defesa = valorDefesa;
    }

}