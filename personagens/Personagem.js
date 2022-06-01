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

     
}