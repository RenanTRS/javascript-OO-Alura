import {Cliente} from "./Cliente.js"

export class ContaCorrente{
    agencia;
    _cliente;
    _saldo = 0; //atributo privado
    
    
    set cliente(novoCliente){
        if(novoCliente instanceof Cliente){
            this._cliente = novoCliente;
        }
    }
    get cliente(){
        return this._cliente;
    }
    
    
    get saldo(){
        return this._saldo;
    }

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