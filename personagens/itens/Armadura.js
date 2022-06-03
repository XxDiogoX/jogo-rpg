export class Armadura{
    //Classe abstrata somente para herança
    constructor(nome,defesa,descricao,defesaElemental){
        if(this.constructor === Armadura){
            throw new Error ("Essa classe não pode ser instanciada diretamente!");
        
        }else if(this.constructor === ArmaduraPeitoral){
            this._nome = nome;
            this._defesa = defesa;
            this._descricao = descricao;
            this._defesaElemental = defesaElemental;
        }else if(this.constructor === Escudo){
            this._nome = nome;
            this._defesa = defesa;
            this._descricao = descricao;
            this._defesaElemental = defesaElemental;

        }
        
    }

    get nome(){
        return this._nome;
    }

    get defesa(){
        return this._defesa;
    }

    get descricao(){
        return this._descricao;
    }

    get defesaElemental(){
        return this._defesaElemental;
    }
}