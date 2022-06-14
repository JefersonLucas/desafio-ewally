# Teste Prático Back End

## O Desafio
Queremos poder através da aplicação consultar linhas digitáveis de boleto de título bancário e pagamento de concessionárias, verificando se a mesma é válida ou não. Sendo válida e possuindo valor e/ou data de vencimento ter o retorno desses dados.

## Instruções
O teste consiste em escrever um programa em Node.js que expõe uma API na qual é dada como entrada uma linha digitada de um boleto e que retorna:

- **status**: 200 para linha válida ou 400 para linha inválida;
- **amount**: O valor do boleto, se existir;
- **expirationDate**: A data de vencimento do boleto, se existir;
- **barCode**: Os 44 dígitos correspondentes ao código de barras desse boleto;

Deverá ser utilizado apenas o método GET e o path deve ser configurado como "http://localhost:8080/boleto/xxxxxx".

- Exemplo de resquest
GET/ http://localhost:8080/boleto/21290001192110001210904475617405975870000002000

Exemplo de response
```json
// status 200
{
  "barCode": "21299758700000020000001121100012100447561740",
  "amount": "20.00",
  "expirationDate": "2018-07-16"
}
```

Você pode consultar a documentação para realizar o desenvolvimento das regras para cada tipo de boleto abaixo:
- [Documentação Título](https://storage.googleapis.com/slite-api-files-production/files/b8def5e9-f732-4749-88ea-25270cb71c4d/Titulo.pdf)
- [Documentação Convênio](https://storage.googleapis.com/slite-api-files-production/files/222c4ec7-9056-4149-aa42-e66b135f523a/Convenio.pdf)

## O que esperamos do seu teste
- Que a API seja desenvolvida utilizando Node JS
- A validação do boleto deve ser feita sem auxílio de bibliotecas de terceiros, aqui queremos avaliar seu raciocínio lógico.
- É essencial que seja feita a validação dos dígitos verificadores e que seja aceito apenas números na linha digitável
- Existem 2 tipos de boletos que seguem regras diferentes: títulos bancários e pagamentos de concessionárias. O código deve funcionar corretamente para ambos.
- Além das instruções passadas não há especificações especiais sobre a arquitetura da API. Estruture os endpoints da forma que achar melhor, justificando suas escolhas sempre que possível.

## O que seria bom ver em seu teste
- Testes unitários
- Retorno com mensagens específicas para cada tipo de erro

## Entrega
Ao término do desafio, disponibilizar o código fonte via git ou por email, junto com instruções de como executar o código.