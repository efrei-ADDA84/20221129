# 20221129
JohannKouame's repository

Langage choisi : Node js
### Installations
* J'ai dû installer `node-fetch` avec la commande `npm install node-fetch --save`
* Puis `express` avec `npm install express --save`
* Puis `openweather-api-node` avec `npm install openweather-api-node`

### Code
* J'ai d'abord codé le wrapper afin de l'utiliser en ligne de commande avec des arguments recupéré avec `procces.argv`
* Après avoir vérifié que le code marche, j'ai changé les paramètres afin de les récuperer en tant que variables d'env avec `process.env`
* J'ai défini 3 var d'env dans le Dockerfile

### Build de l'image
* J'ai build l'image avec `docker build -t weather`
* J'ai l'ai run pour faire un test avec la commande `docker run -it weather --env LAT="" --env LONG="" --env API_KEY=""`
* J'ai crée un repository sur dockerhub appeleé bblksam16/weather-api
* J'ai push l'image dans le repository
