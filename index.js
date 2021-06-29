import {Cliente} from "./Cliente.js"
import { ContaCorrente} from "./ContaCorrente.js"

//Cliente 1
const cliente1 = new Cliente();
const conta1 = new ContaCorrente();
conta1.cliente = cliente1;
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;
conta1.agencia = 101;
conta1.depositar(200);
console.log(conta1._saldo);

//Cliente 2
const cliente2 = new Cliente();
const conta2 = new ContaCorrente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;
conta2.cliente = cliente2;
conta2.agencia = 102;
conta2.depositar(50);
console.log(conta2._saldo);

conta1.transfere(50, conta2);
console.log(`Conta1: ${conta1._saldo}`);
console.log(`Conta2: ${conta2._saldo}`);