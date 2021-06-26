# Let me ask

> Projeto construído durante da semana do Next Level Week da Rocketseat

Um aplicativo para criar um ambiente de perguntas e respostas.

<p align="center">
  <img src="https://github.com/NietoCurcio/letmeask-nlw/blob/main/.github/images/main.png?raw=true" width="750" alt="Let me Ask">
</p>

## React

Este app é um SPA (single page application) construído com o React framework. Nas aulas foram explicados conceitos muito importantes como componente, estado e propriedade ou "props" do componente. Foi usado o Typescript template para seu desenvolvimento, apesar de requerer configurações de tipagens, o Typescript traz diversos benefícios como:

- Menos propício a erros de semântica, código mais seguro, por exemplo se uma função espera uma "string" o Typescript alerta quando isso não ocorre.
- Maior controle das propriedades de objetos, visto que o tipo de um objeto ou até mesmo de um array é declarado e o Typescript possa entender a interface daqueles dados.

### React Context API

API Context do React é uma forma muito poderosa e simples de compartilhar o estado da aplicação entre componentes React. É mantido informações do usuário e do tema da aplicação. Quando a informação é alterada, isso é refletido em todos os componentes que fazem uso dessa informação. A arquitetura do Context API é como a do Redux, "Flux archtetiture", em que o estado da aplicação percorre de maneira unidirecional.

## Firebase - Backend as a Service

### Autenticação

<p align="center">
  <img src="https://github.com/NietoCurcio/letmeask-nlw/blob/main/.github/images/oauth.png?raw=true" width="360" alt="Let me Ask">
</p>

### Realtime Database

Além da autenticação, também é usado o serviço Realtime Database, no qual permite uma rápida configuração de um banco de dados e flexível.

## A milha extra

A milha extra são funcionalidades que adicionamos após o fim das aulas, algumas funcionalidades são sugestões e dicas do Diego no qual deu as aulas da trilha de React, mas também somos incentivados a desenvolver alguma funcionalidade a mais, a milha extra. Dessa forma, é possível aproveitar muito mais o aprendizado de qualquer conteúdo, pois após as aulas é essencial ter ideias, pesquisar, desenvolver e resolver problemas e dúvidas em seu próprio desenvolvimento.

Funcionalidades extras:

### Github OAuth

<p align="center">
  <img src="https://github.com/NietoCurcio/letmeask-nlw/blob/main/.github/images/oauthgithub.png?raw=true" width="360" alt="Let me Ask">
</p>

O Firebase suporta autenticação com várias plataformas como o próprio Google, Github, Facebook, Twitter, entre outros.

### Dark theme

<p align="center">
  <img src="https://github.com/NietoCurcio/letmeask-nlw/blob/main/.github/images/dark.png?raw=true" width="750" alt="Let me Ask">
</p>

### Modal & Styled Components

<table>
  <tr style="display: flex; flex-wrap: wrap;">
    <td><p align="center">
  <img src="https://github.com/NietoCurcio/letmeask-nlw/blob/main/.github/images/modal1.png?raw=true" width="750" alt="Let me ask">
</p></td>
    <td><p align="center">
  <img src="https://github.com/NietoCurcio/letmeask-nlw/blob/main/.github/images/modal2.png?raw=true" width="750" alt="Let me ask">
</p></td>
  </tr>
</table>

### PWA - Progressive Web Apps

<div style="display: flex; flex-wrap: wrap; gap: 2rem">
  <p align="center">
  <img src="https://github.com/NietoCurcio/letmeask-nlw/blob/main/.github/images/pwa.jpeg?raw=true" width="400" alt="Let me Ask Progressive web app">
  </p>
  <p align="center">
  <img src="https://github.com/NietoCurcio/letmeask-nlw/blob/main/.github/images/pwa2.jpeg?raw=true" width="400" alt="Let me Ask PWA">
  </p>
</div>

Progressive Web Apps, são apps que permitem que o usuário em um dispositivo mobile adicione o app em sua home screen, com o ícone do app. Melhora a experiência do usuário visto que não há a necessidade de um app store.

### Responsividade

<table>
  <tr style="display: flex; flex-wrap: wrap;">
    <td><p align="center">
  <img src="https://github.com/NietoCurcio/letmeask-nlw/blob/main/.github/images/responsive.png?raw=true" height="400" alt="Let me Ask">
</p></td>
    <td><p align="center">
  <img src="https://github.com/NietoCurcio/letmeask-nlw/blob/main/.github/images/responsive2.png?raw=true" height="400" alt="Let me Ask">
</p></td>
  </tr>
</table>

### Alerts

<img src="https://github.com/NietoCurcio/letmeask-nlw/blob/main/.github/images/alert.jpeg?raw=true" height="400" alt="Let me Ask">

Alertas quando alguma informação inválida é inserida, através da biblioteca [React-Toastify](https://www.npmjs.com/package/react-toastify)

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

Após carregar o authorId da sala, se o usuário que está acessando uma página admin da sala não for o autor dessa sala, ele é redirecionado para a Home.

Note que, apesar do usuário que não é o admin da sala ser redirecionado, é preciso principalmente se atentar também as regras de negócio da aplicação, no back-end, tendo isso em vista, regras no Realtime Database foram configuradas durante as aulas como somente usuários autenticados podem criar perguntas, somente os usuários que criaram a sala podem fazer operações de escrita na sala, somente o autor do "like" pode tirar o "like" de uma pergunta e somente o autor da sala pode remover perguntas da sala.

Uma outra forma que foi possível fazer é armazenar a informação do usuário em localStorage. O motivo desse pensamento é porque muitas aplicações são construídas armazenando JSON Web Tokens em localStorage para manter requisições autenticadas com o servidor.

## Deploy

O app pode ser acessado [por aqui](https://letmeask-ee03f.web.app/). Ele é hospedado através da funcionalidade "Hosting" do Firebase.

## O que é o NLW?

O NLW é um evento da Rocketseat para aprimorar suas habilidades, dentro de uma semana aulas de diversas trilhas (ecossistemas como Node, React, React Native e etc) ocorrem para a evolução da comunidade de desenvolvedores. Dois princípios que gosto muito da Rocketseat são o **Foco** e a **milha extra**, afinal é preciso de foco em um mundo amplo como o da programação, e se dedicar para ir além, adicionar funcionalidades ou efeitos visuais com seu estilo, em suas próprias pesquisas e desenvolvimento pessoal.

## Social

- [Linkedln](https://www.linkedin.com/in/felipe-antonio-nieto-curcio-9b865116a/).
