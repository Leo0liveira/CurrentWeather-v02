# Avaliação Sprint 2 - Programa de Bolsas Compass.uol e UFMS

Segunda sprint do programa de bolsas Compass.uol para formação em chatbot Rasa.

---

## Link da aplicação

[Weather Tracker no Heroku](https://sprint-api-compass.herokuapp.com/)

[Weather Tracker no Okteto](https://weathertracker-leo0liveira.cloud.okteto.net/)

## Execução Local

Use o gerenciador de pacotes [npm](https://nodejs.org/en/) para executar a aplicação.

1. Faça a clonagem deste repositório em sua máquina.
2. No seu terminal de preferência, execute os comandos abaixo:
```
npm start  
npm run server
```

## Usando o Weather Tracker

Com a aplicação rodando, siga o seguinte fluxo:

* Busque pela cidade escolhida
* Clique no botão buscar

## Desenvolvimento

Vários problemas foram surgindo e era perseptivel que a aplicação necessitava de uma refatoração, para ser capaz de utilizar o express e as outras ferramentas para o desenvolvimento, feito isso fui capaz de utilizar as rotas da aplicação. Optei por utilizar o EJS invés do HTML pois com ele foi mais dinamico e prático para referenciar as informações e retorna-las ao usuario. Foi criada, também, uma classe db onde é feita a conexão entre o cluster provido pelo MongoDB Atlas, e minha aplicação.


## API escolhida
[Current Weather Data](https://openweathermap.org/current)
