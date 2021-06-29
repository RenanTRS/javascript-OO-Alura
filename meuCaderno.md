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
