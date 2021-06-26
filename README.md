# Let me ask

> Projeto contruído durante da semana do Next Level Week da Rocketseat

Um aplicativo para criar um ambiente de perguntas e respostas.

<p align="center">
  <img src="https://github.com/NietoCurcio/letmeask-nlw/blob/main/.github/images/main.png?raw=true" width="750" alt="Let me Ask">
</p>

## React

Este app é um SPA (single page application) construído com o React framework. Nas aulas foram explicados conceitos muito importantes como componente, estado e propriedade ou "props" do componente. Foi usado o Typescript template para seu desenvolvimento, apesar de requerer configurações de tipagens, o Typescript traz diversos benefícios como:

- Menos propício a erros de semantica, código mais seguro, por exemplo se uma função espera uma "string" o typescript alerta quando isso não ocorre.
- Maior controle das propriedades de objetos, visto que o tipo de um objeto ou até mesmo de array é declarado e o Typescript possa entender a interface daqueles dados.

### React Context API

API Context do React é uma forma muito poderosa e simples de compartilhar o estado da aplicação entre componentes React. É mantido informações do usuário e do tema da aplicação. Quando a informação é alterada, isso é refletido em todos os componentes que fazem uso dessa informação. A arquitetura do Context API é como a do Redux, "Flux archtetiture", em que o estado da aplicação percorre de maneira unidirecional.

## Firebase - Backend as a Service

### Autenticação

<p align="center">
  <img src="https://github.com/NietoCurcio/letmeask-nlw/blob/main/.github/images/oauth.png?raw=true" width="750" alt="Let me Ask">
</p>

### Realtime Database

<p align="center">
  <img src="https://github.com/NietoCurcio/letmeask-nlw/blob/main/.github/images/realtime.png?raw=true" width="750" alt="Let me Ask">
</p>

## A milha extra

A milha extra são funcionalidades que adicionamos após o fim das aulas, algumas funcionalidades são sugestões e dicas do Diego no qual deu as aulas da trilha de React, mas também somos incentivados a desenvolver alguma funcionalidade a mais, a milha extra. Dessa forma, é possível aproveitar muito mais qualquer conteúdo aprendido,pois após as aulas é essêncial ter ideias, pesquisar, desenvolver e resolver problemas e dúvidas em seu próprio desenvolvimento.

Funcionalidades extras:

### Dark theme

<p align="center">
  <img src="https://github.com/NietoCurcio/letmeask-nlw/blob/main/.github/images/dark.png?raw=true" width="750" alt="Let me Ask">
</p>

### Modal & Styled Components

<table>
  <tr style="display: flex; flex-wrap: wrap;">
    <td><p align="center">
  <img src="https://github.com/NietoCurcio/letmeask-nl/blob/main/.github/images/modal1.png?raw=true" width="750" alt="Seller Finder">
</p></td>
    <td><p align="center">
  <img src="https://github.com/NietoCurcio/letmeask-nl/blob/main/.github/images/modal2.png?raw=true" width="750" alt="Seller Finder">
</p></td>
  </tr>
</table>

### PWA - Progressive Web Apps

<p align="center">
  <img src="https://github.com/NietoCurcio/letmeask-nlw/blob/main/.github/images/pwa.png?raw=true" width="750" alt="Let me Ask">
</p>

Apps permitem que o usuario adicione o app em sua home screen com o icone do app e também...

### Responsividade

<p align="center">
  <img src="https://github.com/NietoCurcio/letmeask-nlw/blob/main/.github/images/responsive.png?raw=true" width="750" alt="Let me Ask">
</p>s

### Alerts

Alertas quando alguma informação inválida é inserida, atravéz da biblioteca [React-Toastify](https://www.npmjs.com/package/react-toastify)

### Segurança

Enquanto a aplicação espera pela informação "authorId" a aplicação é mantida em um estado de carregamento.

```
useEffect(() => {
    if (authorId)
      if (authorId !== localStorage.getItem('userId')) history.push('/')
      // ou
      if (authorId) if (authorId !== user?.id) history.push('/')
  }, [authorId, history])
```

Após carregar o authorId da sala, se o usuário que esta acessando uma pagina admin da sala não for o autor dessa sala, ele é redirecionado para a Home.

Note que apesar do usuario que não é o admin da sala ser redirecionado, é preciso principalmente se atentar também as regras de negócio da aplicação, no back-end, tendo isso em vista, regras no Realtime Database foram configuradas durante as aulas como somente usuários autenticados podem criar perguntas, somente os usuários que criaram a sala podem fazer operações de escrita na sala, somente o autor do "like" pode tirar o "like" de uma pergunta e somente o autor da sala pode remover perguntas da sala.

Uma outra forma de fazer...
Armazeno a informação do usuário em localStorage, o motivo disso é que muitas aplicações são construídas armazenando JSON Web Tokens em localStorage para manter requisições autenticadas com o servidor.

## Deploy

O app pode ser acessado [por aqui](https://letmeask-ee03f.web.app/). Ele é hospedado atravez da funcionalidade "Hosting" do Firebase.

## O que é o NLW?

O NLW é um evento da Rocketseat para aprimorar suas habilidades, dentro de uma semana aulas de diversas trilhas (ecossistemas como Node, React, React Native e etc) ocorrem para a evolução da comunidade de desenvolvedores. Dois princípios que gosto muito da Rocketseat são o **Foco** e a **milha extra**, afinal é preciso de foco em um mundo amplo como o da programação, e se dedicar para ir além, adicionar funcionalidades ou efeitos visuais com seu estilo, em suas próprias pesquisas e desenvolvimento pessoal.

## Social

- [Linkedln](https://www.linkedin.com/in/felipe-antonio-nieto-curcio-9b865116a/).
