class Cliente{

  private _nome : string;
  private _cpf : string;
  private _conta: Conta;

  constructor(cpf:string, nome:string){
    this._nome=nome;
    this._cpf=cpf;
  }
    
get nome():string{
    return this._nome;
}


get cpf() : string{
    return this._cpf;
}

get conta() : Conta{
    return this._conta;
}

set nome(nome:string){
    this._nome=nome;
}


set cpf(cpf:string){
    this._cpf=cpf;
}


set conta(conta:Conta){
    this._conta=conta;
}


ToString() : string {

    let string = `Nome: ${this._nome} ; CPF: ${this._cpf}`;
    return string;
}

}