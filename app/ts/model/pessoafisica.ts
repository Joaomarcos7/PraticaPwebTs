class PessoaFisica extends Pessoa{

    readonly _cpf: string;

    constructor(nome:string,idade:number,dataNascimento:Date,cpf:string){
        super(nome+" - Física",idade,dataNascimento);
        this._cpf=cpf;
    }

    get cpf() : string{
        return this._cpf;
    }

   
    ToString() : string {
        return `Nome: ${super.nome} ; Idade : ${super.idade}; DataNascimento : ${super.dataNascimento} ; CPF: ${this._cpf}`;
    }
}