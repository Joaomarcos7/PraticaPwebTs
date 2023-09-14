class Clientes{

        private _clientes: Array<Cliente>;

    constructor(){
        this._clientes= new Array<Cliente>();
    }

    inserir( cliente: Cliente): void{

        this._clientes.push(cliente);
        console.log("cliente inserido!")
    }


    pesquisar(cpf:string): Cliente{
        return this._clientes.find(x=>x.cpf===cpf);
    }


    remover(cpf:string) : void{
        let elemento= this.pesquisar(cpf);

        if(elemento!=null){
            let index= this._clientes.findIndex(cliente=>cliente.cpf === elemento.cpf);
            if(index>-1){
                this._clientes.splice(index,1);
                console.log("removeu cliente!");
            }
        }
    }

    listar(): Array<Cliente>{

        return this._clientes;
    }

    ToString() : string {
        let string= "";
        this.listar().forEach(cliente=>{
            string+=cliente.ToString + "\n";
        })
        return string;
    }


}