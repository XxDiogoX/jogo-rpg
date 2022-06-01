export class Personagem{

    constructor(nome){
        //Class abstrata, somente para uso de herança
        if( this.constructor == Personagem){
            throw new Error ("Está classe não pode ser instanciada diretamente.")

        }else{
            this._nome = nome;
            this._hp = 520;
            this._ataque = 5;
            this._defesa = 2;
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

    atacar(alvo){
        alvo.sofrerDano(this.ataque,alvo);
    }


    sofrerDano(dano,alvo){
        let danoSofrido = dano - alvo.defesa
        this.__sofrerDano(danoSofrido,alvo);

    }

    __sofrerDano(danoSofrido,alvo){
        alvo.hp -= danoSofrido;
    }

    


}