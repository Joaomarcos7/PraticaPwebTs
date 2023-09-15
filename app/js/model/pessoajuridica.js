class PessoaJuridica extends Pessoa {
    constructor(nome, idade, dataNascimento, cnpj) {
        super(nome + " - Jurídica", idade, dataNascimento);
        this._cnpj = cnpj;
    }
    get cnpj() {
        return this._cnpj;
    }
    ToString() {
        return `Nome: ${super.nome} ; Idade : ${super.idade}; DataNascimento : ${super.dataNascimento}`;
    }
}
