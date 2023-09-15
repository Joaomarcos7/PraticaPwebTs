class Pessoa {
    constructor(nome, idade, dataNascimento) {
        this._nome = nome;
        this._idade = idade;
        this._dataNascimento = dataNascimento;
    }
    get nome() {
        return this._nome;
    }
    get idade() {
        return this._idade;
    }
    get dataNascimento() {
        return this._dataNascimento;
    }
    set nome(nome) {
        this._nome = nome;
    }
    set idade(idade) {
        this._idade = idade;
    }
    set dataNascimento(data) {
        this._dataNascimento = data;
    }
    ToString() {
        return `Nome: ${this._nome} ; Idade : ${this._idade}; DataNascimento : ${this._dataNascimento}`;
    }
}
