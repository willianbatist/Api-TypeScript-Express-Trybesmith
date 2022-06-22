### Observação

Este repositório contem o **Projeto API Order TrybeSmith** que reúne o aprendizado desenvolvido por _[Willian Alves Batista](https://www.linkedin.com/in/willian-alves-batista-60aa6a180/)_ enquanto estudante da [Trybe](https://www.betrybe.com/) :rocket:
**GitHub [Trybe](https://github.com/tryber)**.

# Projeto API Order TrybeSmith


#### Habilidades que foram exigidas:

  - Desenvolvimento de API em TypeScript;
  - Declarar variáveis e funções com tipagens Typescript;
  - Utilizar Express;
  - Operações basicas no bando de dados: Create, Read, Update e Delete;
  - Utilizar o Docker;
  - Utilizar SQL;
  - Utilizar o MySql;
  - Utilizar JsonWebToken.

---

## Apresentação do Projeto


### Introdução

O Projeto TrybeSmith é uma API de uma loja de produtos medievais que possui informações dos usuários, dos produtos e dos pedidos feitos pelos usuários. O objetivo dessa aplicação é praticar o desenvolvimento de API com TypeScript, respeitando as camadas model, controller e service.


### Inicialização

  Com o docker compose já criado, a primeira forma de fazer funcionar o projeto é utilizando-o da seguinte forma: com o **docker-compose up -d**, serão criados dois container, o mysql que rodará na porta 3306, e o segundo onde rodará o projeto. Agora, basta digitar **docker exec -it trybesmith bash**, onde irá entrar no container do projeto, sendo assim só instalar as dependências com **npm install** e por fim rodar com **npm start**.

### Visão Geral

  Como dito anteriormente, o projeto está dividido em camadas. Na models estão as funções que interagem com o banco de dados e suas querys. Na service estão as regras de negócio. E na camada controllers é onde estão sendo realizadas as funções de request e response. Pela simplicidade do projeto, as rotas foram colocadas em app.js, onde são realizados os post e get, nas rotas “/products”, “/users” e “/orders”.
  
---
### Trybe

_"A Trybe é uma escola do futuro para qualquer pessoa que queira melhorar de vida e construir uma carreira de sucesso em tecnologia, onde a pessoa só paga quando conseguir um bom trabalho."_
