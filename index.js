class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    _saldo = 0; //atributo privado

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }
    depositar(valor){
        if(valor > 0){
            this._saldo += valor;
        }
    }
}

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
console.log(valorSacado);
//console.log(contaCorrenteRicardo);
