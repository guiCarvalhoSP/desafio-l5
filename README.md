# Desafio L5 Network

## Descrição 
Este projeto é o teste técnico para candidatura a vaga de emprego oferecida pela empresa L5 Network. O projeto se baseia em consumir um API externa que possui dados da série Rick and Morty, onde foi construída uma aplicação que utiliza os dados oferecidos pela API. Descrição dos requisitos do desafio:
- A aplicação deve seguir o modelo de dashboard;

- Utilize a versão REST da API;

- A aplicação deve conter ao menos uma página de listagem e uma página de detalhes, acessada ao clicar em um dos itens da listagem;

- As listagens devem possuir paginação (preferencialmente scroll infinito);

- A aplicação deve possuir uma barra de busca que: 
  - Deve ser global na aplicação;
  - Deve ser exibida apenas nas listagens;
  - Deve filtrar a listagem ativa;
  - Deve funcionar em todas as listagens implementadas; Ao trocar de uma listagem para outra (caso haja mais de uma tela de listagem) o filtro da barra de busca deve permanecer ativo, ou seja, a nova listagem já deverá ser carregada filtrada com base no termo;

- (OPCIONAL) Criar uma tela de login, uma página de perfil e um menu com nome do usuário logado e opção para realizar o logout; Não é necessário implementar uma API para isso, pode utilizar mocks;

[Docs da api](https://rickandmortyapi.com/)
 ## 📁 Acesso ao projeto

Você pode ter acesso aos arquivos do projeto clicando [aqui](https://github.com/guiCarvalhoSP/desafio-trade-tecnology). 

## 🛠️ Como rodar o projeto

- É necessário ter previamente instalado em sua máquina o [Git](https://git-scm.com/), [NPM](https://www.npmjs.com/) e [NodeJs](https://nodejs.org/en), em suas versões LTS, também necessário o uso do [Angular CLI](https://v15.angular.io/docs), em sua versão 16. Após instala-los e configura-los, poderá seguir para os próximos passos.

- Execute seguinte comando em um terminal para clonar o projeto no diretório desejado:
```sh
git clone https://github.com/guiCarvalhoSP/desafio-l5.git
```

- Após clonar, abra o diretório no projeto em um terminal, e execute:
```sh
npm install
```

- Ao finalizar a instalação, você pode executar o programa com o seguinte comando:
```sh
ng serve
```
Após a inicialização no terminal, poderá ser acessado a aplicação através de um navegador, acessado a rota ``http://localhost:4200/``

- Caso deseje realizar os testes unitários, execute o comando:
```sh
ng test
```

## ✔️ Tecnologias utilizadas
- ``Angular 16``
- ``RxJs``
- ``Angular Material``
- ``ngx-infinite-scroll``
- ``Scss``
