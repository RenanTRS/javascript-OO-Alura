export class ContaCorrente{
    agencia;
    cliente;

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
    transfere(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}