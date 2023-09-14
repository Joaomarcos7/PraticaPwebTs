class ClienteEspecial extends Cliente {
    constructor(dependentes, nome, cpf) {
        super(nome, cpf);
        this._dependentes = dependentes;
    }
    get dependentes() {
        return this._dependentes;
    }
    set dependentes(dependentes) {
        this._dependentes = dependentes;
    }
}
