class Clientes {
    constructor() {
        this._clientes = new Array();
    }
    inserir(cliente) {
        this._clientes.push(cliente);
        console.log("cliente inserido!");
    }
    pesquisar(cpf) {
        let cliente = this._clientes.find(x => x.cpf === cpf);
        console.log(cliente.ToStringFormat());
        return cliente;
    }
    remover(cpf) {
        let elemento = this.pesquisar(cpf);
        if (elemento != null) {
            let index = this._clientes.findIndex(cliente => cliente.cpf === elemento.cpf);
            if (index > -1) {
                this._clientes.splice(index, 1);
                console.log("removeu cliente!");
            }
        }
    }
    listar() {
        return this._clientes;
    }
    ToStringFormat() {
        let string = "";
        this.listar().forEach(cliente => {
            string += cliente.ToStringFormat() + "\n";
        });
        return string;
    }
}
