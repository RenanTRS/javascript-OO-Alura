import {Cliente} from "./Cliente.js"
import { ContaCorrente} from "./ContaCorrente.js"

//Cliente 1
const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

//Cliente 2
const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.depositar(300);
const valorSacado = contaCorrenteRicardo.sacar(50);
//console.log(valorSacado);
console.log(contaCorrenteRicardo);
