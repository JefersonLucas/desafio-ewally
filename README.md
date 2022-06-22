# Teste Prático Back End

## O Desafio
Queremos poder através da aplicação consultar linhas digitáveis de boleto de título bancário e pagamento de concessionárias, verificando se a mesma é válida ou não. Sendo válida e possuindo valor e/ou data de vencimento ter o retorno desses dados.

## Instruções
### Heroku

Para utilizar a aplicação no [Heroku](https://desafio-ewally.herokuapp.com), siga as instruções:

- Exemplo de requisição `GET/` https://desafio-ewally.herokuapp.com/boletos/21290001192110001210904475617405975870000002000

- Exemplo de resposta:
```jsonc
// status 200
{
  "barCode": "21299758700000020000001121100012100447561740",
  "amount": "20.00",
  "expirationDate": "2021-04-10"
}
```

### Localmente

Para utilizar a aplicação localmente, siga as instruções:

- Faça o [download](https://github.com/JefersonLucas/desafio-ewally/archive/refs/heads/main.zip) do projeto e extraia os seus arquivos.
- Com o [Node.js](https://nodejs.org/dist/v16.15.1/node-v16.15.1-x64.msi) instalado, faça a instalação da aplicação com os seguintes comandos:

```bash
npm install

# or

yarn install
```

- Após a instalação, utilize o seguinte comando para iniciar a aplicação em modo de desenvolvimento:

```bash
npm run dev

# or

yarn dev
```

- Utilize algum client HTTP ou mesmo no navegador abra em [http://localhost:8080/boletos/xxxx](http://localhost:8080/boletos/xxxx) para fazer as requisições.

- Exemplo de requisição:

  - [http://localhost:8080/boletos/21290001192110001210904475617405975870000002000](http://localhost:8080/boletos/21290001192110001210904475617405975870000002000) 

- Exemplo de resposta:

  ```jsonc
  // status 200
  {
    "barCode": "21299758700000020000001121100012100447561740",
    "amount": "20.00",
    "expirationDate": "2021-04-10"
  }
  ```
