class ClienteEspecial extends Cliente{

private _dependentes: Array<Cliente>;

constructor(dependentes: Array<Cliente>,nome:string,cpf:string){
    super(nome,cpf);
    this._dependentes=dependentes;
}


get dependentes(){
    return this._dependentes;
}


set dependentes( dependentes : Array<Cliente>){
    this._dependentes=dependentes;
}


}