<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h1 align="center">Descrição do Projeto</h1>
  <h2 align="center">Ricardo Naoki Horiguchi</h2>
  <h3 align="center">Teste para processo seletivo</h3>
  <h4 align="center">O aplicativo lista as academias, mostra as atividades de cada academia e permite que o usuário faça checkin em mais de uma atividade, desde que essa não seja a mesma no mesmo dia.</h4>
</p>

<!-- TABLE OF CONTENTS -->

## Tabela de Conteúdo

- [Tabela de Conteúdo](#tabela-de-conte%c3%bado)
- [Sobre o Projeto](#sobre-o-projeto)
  - [Feito Com](#feito-com)
- [Começando](#come%c3%a7ando)
  - [Pré-requisitos](#pr%c3%a9-requisitos)
  - [Instalação](#instala%c3%a7%c3%a3o)
    - [Passo Adicional no Android](#passo-adicional-no-android)
- [Para rodar a aplicação:](#para-rodar-a-aplica%c3%a7%c3%a3o)
- [Dúvidas e Contato](#d%c3%bavidas-e-contato)

<!-- ABOUT THE PROJECT -->

## Sobre o Projeto

Este projeto visa a criação de um app utilizando React Native, para o desafio listado neste [arquivo](ChallengeREADME.md)

### Feito Com

Abaixo segue alguns pacotes e libs que foram utilizados na criação deste projeto:

- [React Native](http://facebook.github.io/react-native/) - O React Native é um framework que permite o desenvolvimento de aplicações mobile usando Javascript e React;
- [Redux](https://redux.js.org/) - O Redux é um contêiner de estado previsível para aplicativos JavaScript. Ele ajuda você a escrever aplicativos que se comportam consistentemente, executados em diferentes ambientes (cliente, servidor e nativo) e são fáceis de testar;
- [React Navigation](https://reactnavigation.org/) - O React Navigation surgiu da necessidade comunidade do React Native de uma navegação de forma fácil de se usar, e escrita toda em Javascript;
- [React Native Gesture Handler](https://kmagiera.github.io/react-native-gesture-handler/) - API declarativa que permite a manipulação de toques e gestos no React Native;
- [Axios](https://github.com/axios/axios) - O Axios é um cliente HTTP baseado em Promises para Browser e NodeJS;
- [Reactotron](https://github.com/infinitered/reactotron) - O Reactotron é um app Desktop para inspecionar projetos em React ou React Native. Está disponível para macOS, Linux e Windows;
  - [reactotron-react-native](https://github.com/infinitered/reactotron/blob/master/docs/quick-start-react-native.md) - Plugin para configurar o Reactotron para se conectar ao projeto React Native;
  - [reactotron-redux](https://github.com/infinitered/reactotron/blob/master/docs/plugin-redux.md) - Plugin que permite acompanhar todas as Actions que são disparadas na aplicação, mostrando toda a estrutura da Action;
  - [reactotron-redux-saga](https://github.com/infinitered/reactotron/blob/master/docs/plugin-redux-saga.md) - Plugin que permite você percorrer uma saga na sua aplicação, poderá ver a saga e os efeitos que ela desencadeia ao longo do caminho;
- [Babel](https://babeljs.io/) - O Babel é um compilador JavaScript gratuito e de código aberto e transpiler configurável usado no desenvolvimento de aplicações Javascript;
  - [babel-eslint](https://github.com/babel/babel-eslint) - Este pacote é um _wrapper_ do parser do Babel para o ESLint;
  - [babel-plugin-root-import](https://github.com/entwicklerstube/babel-plugin-root-import) - Esse plugin do Babel permite que sejam feitos imports e requires em caminhos baseados em uma raiz(root);
- [Eslint](https://eslint.org/) - O ESLint é uma ferramenta de lint plugável para JavaScript e JSX;
  - [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) - Este pacote fornece o .eslintrc do Airbnb como uma configuração compartilhada extensível;
  - [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) - Plugin do ESLint com regras para ajudar na validação de imports;
  - [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) - Verificador estático AST das regras do a11y em elementos JSX;
  - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) - Regras de linting do ESLint específicas do React;
  - [eslint-plugin-react-native](https://github.com/Intellicode/eslint-plugin-react-native) - Regras de linting do ESLint específicas do React Native;
  - [eslint-import-resolver-babel-plugin-root-import](https://github.com/olalonde/eslint-import-resolver-babel-root-import) - Um resolver da lib _babel-root-import_ para a lib _eslint-plugin-import_;
- [EditorConfig](https://editorconfig.org/) - O EditorConfig é um formatador de arquivos e coleções em forma de Plugin para Editores de código/texto com o objetivo de manter um padrão de código consistente entre diferentes editores, IDE's ou ambientes;
-Entre outas

<!-- GETTING STARTED -->

## Começando

Para conseguir utilizar o aplicativo, seja através do React Native CLI ou com uma cópia local dos arquivos, siga os passos abaixo.

### Pré-requisitos

Antes de seguirmos para as configurações e uso do projeto, é ideal que você tenha o ambiente configurado para criar e testar aplicativos em React Native, para isso você pode seguir o guia do link abaixo:

[Ambiente React Native (Android/iOS)](https://github.com/Rocketseat/ambiente-react-native)


### Instalação

1. Para instalar e utilizar esse projeto o processo é bem simples, basta digitar um dos comandos abaixo no terminal:

```sh
yarn install
```
ou
```sh
npm install
```


1. Com isso o projeto será criado com todas as dependências do projeto devidamente instaladas e linkadas, tal como os arquivos de configuração que são copiados para o projeto.

---

#### Passo Adicional no Android

Para que os gestos sejam habilitados no Android é necessário a seguinte verificação, que é bem simples, abra o arquivo `android/app/src/main/java/<pacote_do_projeto>/MainActivity.java`, e veja se o código está como o abaixo:

```java
// ...
import com.facebook.react.ReactActivity;
//Adicionar código abaixo caso não exista
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
```

```java
public class MainActivity extends ReactActivity {
  @Override
  protected String getMainComponentName() { ... }
//Adicionar código abaixo caso não exista
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {
      @Override
      protected ReactRootView createRootView() {
        return new RNGestureHandlerEnabledRootView(MainActivity.this);
      }
    };
  }
}
```

---

## Para rodar a aplicação:

É preciso ter instalado o Xcode ou o android studio para que possa fazer o build do app.
1. Faça o build com o seguinte comando abaixo para criar o app no Xcode (iOS):

```sh
react-native run-ios
```

ou utilize o comando abaixo para rodar no simulador do Android (Android Studio):

```sh
react-native run-android
```
2. Rode a aplicação utilizando o comando abaixo:

```sh
yarn start
```
ou
```sh
npm start
```
## Dúvidas e Contato

Ricardo Naoki Horiguchi - [Github](https://github.com/longvision) - **r.n.hori@gmail.com**
