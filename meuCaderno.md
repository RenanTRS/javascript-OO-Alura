# Aula01 - Repetição de Código
## Entendendo o problema do cliente:
- Variáveis do tipo ```const``` (constante) são imutáveis;  
## Nossa primeira classe:  
- Declarar uma classe com seus atributos:  
```
class Cliente{
	nome;
	cpf;
	agencia;
	saldo;
}
```
- Fazer referência:  
```
const cliente1 = new Cliente();  
```
- Usando referência:  
```
cliente1.nome = "Ricardo";  
```

# Aula02 - Adicionando Comportamentos
## Comportamentos de classes:  
- **Métodos:**  
```
sacar(valor){
	if(this._saldo >= valor){
		this._saldo -= valor;
	}
}
```

## Atributos Privados:  
- ```#saldo``` Forma ainda não oficial de deixar um atributo privado;  
- ```_saldo``` Outra forma que a conveção da comunidade diz que um atributo é privado;  
