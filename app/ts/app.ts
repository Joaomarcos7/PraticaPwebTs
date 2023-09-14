
let clienteController= new ClienteController();


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
clientes.toString();

console.log("Cliente Pesquisado:")
clientes.pesquisar("14059714445").ToString();

clientes.remover("14059714445");

console.log("Lista de CLientes");
clientes.toString();
