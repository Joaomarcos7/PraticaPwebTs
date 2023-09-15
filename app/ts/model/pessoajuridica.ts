class PessoaJuridica extends Pessoa{

    readonly _cnpj: string;

    constructor(nome:string,idade:number,dataNascimento:Date,cnpj:string){
        super(nome+ " - Jurídica",idade,dataNascimento);
        this._cnpj=cnpj;
    }

    get cnpj() : string{
        return this._cnpj;
    }

    ToString() : string {
        return `Nome: ${super.nome} ; Idade : ${super.idade}; DataNascimento : ${super.dataNascimento}`;
    }
}