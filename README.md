# TALKER MANAGER

## Sobre

Talker Manager é um projeto desenvolvido durante o módulo de backend no curso da Trybe. O objetivo é criar uma aplicação de cadastro de talkers (palestrantes) em que é possível cadastrar, visualizar, pesquisar, editar e excluir informações (CRUD). 

Os códigos desenvolvidos por mim podem ser encontrados na pasta `src`, com exceção do arquivo `talker.json` e parte do `index.js`, que são arquivos feitos pela Trybe para a realização do projeto.

## Ferramentas usadas

- Docker
- Express
- Nodemon
- Chai 
- Sinon 
- Jest 
- Frisby

## Orientações 

<details>
<summary><strong>🐋 Rodando no Docker vs Localmente</strong></summary><br />

### Com Docker 

> Tendo o Docker instalado, rode usando o comando `docker-compose up -d`
- Esse serviço irá inicializar um container chamado `talker_manager`.
- A partir daqui você pode rodar o container via CLI ou abri-lo no VS Code.
> Use o comando `docker exec -it talker_manager bash`
- Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.
> Instale as dependências [Caso existam] com `npm install`
> Execute a aplicação com `npm start` ou `npm run dev`

### Sem Docker

- Clone o repositório com o comando `git clone git@github.com:daviazev/talker-manager.git`
- Entre na pasta com o comando `cd talker-manager`
- Instale as dependências [Caso existam] com `npm install`

1. Para rodar o projeto desta forma, obrigatoriamente você deve ter o node instalado em seu computador.

2. O avaliador espera que a versão do node utilizada seja a 16.

</details>

<details>
<summary><strong>⚒️ Testes</strong></summary><br />

  O projeto usa as ferramentas [Jest](https://jestjs.io/pt-BR/) e o [Frisby](https://docs.frisbyjs.com/) para fazer os testes de API.

  Este projeto já vem configurado e com suas dependências

  ### Executando todos os testes

  Para poder executar os testes, inicie sua aplicação com `npm run dev`, em seguida, basta executar o comando `npm test` e **todos** os seus testes serão executados.

  ### Executando um teste específico

  Para executar um teste expecífico, inicie sua aplicação com `npm run dev`, em seguida, basta executar o comando `npm test nome-do-teste`.

  Ex: Para executar o teste referente ao **01-getAllTalkers**, basta digitar `npm test 01`.

  :warning: **Importante:** os comandos de testes podem ser executados tanto no terminal do seu computador quanto do **_Docker_**.
</details>