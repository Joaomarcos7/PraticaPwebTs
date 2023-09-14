class ClienteController {
    constructor() {
        this.clientes = new Clientes();
        this.inputnome = document.querySelector("#nome");
        this.inputcpf = document.querySelector("#cpf");
    }
    inserir(event) {
        event.preventDefault();
        let novoCliente = new Cliente(this.inputnome.value, this.inputcpf.value);
        this.clientes.inserir(novoCliente);
        alert("Cliente Adicionado!!!");
    }
    listarnoHtml() {
        let elementoUl = document.querySelector("#listaclientes");
        elementoUl.innerHTML = "";
        this.clientes.listar().forEach(cliente => {
            let elemento = document.createElement("li");
            let btnelemento = document.createElement("button");
            btnelemento.textContent = "apagar Cliente!!!";
            btnelemento.addEventListener("click", () => {
                confirm("Deseja remover elemento?");
                if (confirm) {
                    this.clientes.remover(cliente.cpf);
                }
            });
            elemento.textContent = cliente.ToString();
            elementoUl.appendChild(elemento);
            elemento.appendChild(btnelemento);
        });
    }
}
