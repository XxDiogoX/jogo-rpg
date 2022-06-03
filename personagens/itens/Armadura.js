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
            this._refinoArmadura = 0;
            this._quantidadePedraParaRefino = 1;
        }else if(this.constructor === Escudo){
            this._nome = nome;
            this._defesa = defesa;
            this._descricao = descricao;
            this._defesaElemental = defesaElemental;
            this._refinoArmadura = 0;
            this._quantidadePedraParaRefino = 1;

        }
        
    }

    get nome(){
        return this._nome;
    }

    get defesa(){
        return this._defesa;
    }

    set defesa(defesa){
        this._defesa += defesa;
    }

    get descricao(){
        return this._descricao;
    }

    get defesaElemental(){
        return this._defesaElemental;
    }

    get refinoArmadura(){
        return this._refinoArmadura;
    }

    get quantidadeDePedraParaRefino(){
        return this._quantidadePedraParaRefino;
    }
    

    refinarArmadura(pedraDeRefino){
        if(pedraDeRefino === Elunium && pedraDeRefino >= this.quantidadeDePedraParaRefino){
            let defesaAcrescentada = 3;
            this.defesa = defesaAcrescentada;           
        }
    }
}