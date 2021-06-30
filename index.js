import {Cliente} from "./Cliente.js"
import { ContaCorrente} from "./ContaCorrente.js"

//Cliente 1
const cliente1 = new Cliente("Ricardo", 11122233309);
const conta1 = new ContaCorrente();
conta1.cliente = cliente1;
conta1.agencia = 101;
conta1.depositar(200);
//console.log(conta1._saldo);

//Cliente 2
const cliente2 = new Cliente("Alice", 88822233309);
const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;
conta2.depositar(50);


conta1.transfere(50, conta2);
console.log(conta2);
