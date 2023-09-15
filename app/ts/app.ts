
let clienteController= new ContaController();


//contaController.listar();

const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);


let clientes= new Clientes();


let cliente1= new Cliente("João","140597144445");
let cliente2= new Cliente("Felipe","140597144412");
let cliente3= new Cliente("Lucas","140597144432");


clientes.inserir(cliente1);
clientes.inserir(cliente2);
clientes.inserir(cliente3);

console.log("Lista de CLientes");
console.log(clientes.ToStringFormat());

console.log("Cliente Pesquisado:")
console.log(clientes.pesquisar("140597144445"));

clientes.remover("140597144432");
console.log("removido!!!");
console.log("Lista de CLientes");
console.log(clientes.ToStringFormat());


const pessoa1 =new Pessoa("João",20,new Date("11/06/2023"));
const pessoa2 =new PessoaJuridica("Olivia",21,new Date("11/06/2023"),"67831238391283");
const pessoa3 =new PessoaFisica("Lucas",30,new Date("11/06/2023"),"140597144445");


console.log(pessoa1.ToString());

console.log(pessoa2.ToString());

console.log(pessoa3.ToString());