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

# Aula03 - Modularizando Código
## Modulos JavaScript:  
- ```export``` Serve para informar ao compilador que a classe irá exportar informações para outros arquivos;  
- ```import {Cliente} from "Cliente.js"``` Forma de importar o módulo Cliente;  

- **Classe Cliente**  
```
export class Cliente{
	nome;
	rg;
	cpf;
}
```
- **index.js**  
```
import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
```
- **package.json**  *no terminal digite:* ```npm init```. Confirme as perguntas a seguir e então será criado o arquivo package.json, adicione ```"type": "module"```desta forma o index.js poderá importar outras classes;  

# Aula04 - Acessando Atributos privados
## Null e undefined:  
- ```null``` Serve para impedir que algo seja posto no lugar dele;  
```
conta.cliente = null;
```
## Getters e Setters:  
- ```set``` ou ```get``` Serve para criar os métodos acessores;  
- ```instanceof``` Serve para identificar se o parâmetro é uma instância de outra classe;  
```
set cliente(novoCliente){
	if(novoCliente instanceof Cliente){
		this._cliente = novoCliente;
	}
}
get cliente(){
	return this._cliente;
}
```  
# Aula05 - Construtores e estáticos
## Construtores:
- Exemplo de construtor;  
```
constructor(nome, cpf){
	this.nome = nome;
	this._cpf = cpf;
}
```
## Atributos estáticos:
- ```static numeroDeContas = 0;``` Forma de deixar um atributo estático;  
- Forma de usar um atributo estático;  
```
constructor(agencia, cliente){
	this.agencia = agencia;
	this.cliente = cliente;
	ContaCorrente.numerodeDeContas += 1;
}
```