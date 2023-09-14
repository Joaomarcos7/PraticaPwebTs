class Cliente {
    constructor(cpf, nome) {
        this._nome = nome;
        this._cpf = cpf;
    }
    get nome() {
        return this._nome;
    }
    get cpf() {
        return this._cpf;
    }
    get conta() {
        return this._conta;
    }
    set nome(nome) {
        this._nome = nome;
    }
    set cpf(cpf) {
        this._cpf = cpf;
    }
    set conta(conta) {
        this._conta = conta;
    }
    ToString() {
        let string = `Nome: ${this._nome} ; CPF: ${this._cpf}`;
        return string;
    }
}