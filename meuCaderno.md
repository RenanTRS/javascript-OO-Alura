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