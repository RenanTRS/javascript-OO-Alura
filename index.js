import {Cliente} from "./Cliente.js"
import { ContaCorrente} from "./ContaCorrente.js"

//Cliente 1
const cliente1 = new Cliente("Ricardo", 11122233309);
const conta1 = new ContaCorrente(101, cliente1);
conta1.depositar(200);


//Cliente 2
const cliente2 = new Cliente("Alice", 88822233309);
const conta2 = new ContaCorrente(102, cliente2);
conta2.depositar(50);

//Output
conta1.transfere(50, conta2);
console.log(conta1);
console.log(ContaCorrente.numeroDeContas);
