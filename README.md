
# Tech-challenge 

Seja bem vindo ao meu projeto, sou Matheus Alves e esse projeto foi feito para concorrer a vaga de Analista de desenvolvimento mobile na RemOpt de acordo com as especificações e condições estabelecidas pelo teste técnico.

## Instalação

Clone o projeto do github com o comando:

```bash
  git clone git@github.com:MatheusAlvesPereiraRosa/remOPT_challenge.git
```

Faça algumas configurações que estão informados no site oficial do react-native (se você já tiver feito, não é necessário)

https://reactnative.dev/docs/environment-setup

Rode o comando npm i no terminal que desejar antes de iniciar o projeto:

```bash
  npm install ou npm i
```

Após isso, rode o projeto com o comando:

```bash
  npx react-native run-android
```

E pronto, o projeto vai começar a compilar e rodará em qualquer aparelho android (IOS eu não cheguei a testar, mas lembro de ter acionado as permissões para usar as funcionalidades do sistema operacional), seja ele virtual ou físico.
    
## Principais Bibliotecas/Frameworks utilizados

**@react-navigation:** É uma biblioteca que permite a navegação entre telas na aplicação, podendo escolher entre quatro tipos dela: stack, stack-native, drawer e tab.

**Axios:** É uma biblioteca que permite realizar requisições HTTP para endpoints por meio de funções oferecidos pela biblioteca. Seu principal concorrente é a fetchAPI que veio depois para ser um opção natural do React.

**react-native-camera/react-native-qrcode-scanner:** É uma biblioteca que permite o uso da câmera apenas para scannear QR code, e após isso realizar qualquer operação necessária com os dados scanneados.

## Print do insomnia fazendo requisição

![Requisição API - Print Insomnia](https://github.com/MatheusAlvesPereiraRosa/remOPT_challenge/assets/88355395/3b58c068-ddcc-48c9-9097-bb94b271305c)

Obs.: A imagem também está no projeto

## Considerações

Como tinha sido tirado a dúvida com a pessoa responsável pelo teste, eu fiz a requisição via axios em vez de utilizar a interface retrofit, por ser mais adequado ao react-native e para não gerar o "ninho de vespas".


