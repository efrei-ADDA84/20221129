# 20221129
JohannKouame's repository

Langage choisi : Node js
### Installations
* J'ai dû installer <node-fetch> avec la commande `npm install node-fetch --save`
* Puis `express` avec `npm install express --save`
* Puis `openweather-api-node` avec `npm install openweather-api-node`

### Code
* J'ai d'abord codé le wrapper afin de l'utiliser en ligne de commande avec des arguments
* Après avoir vérifier que le code marche, j'ai changé les paramètre afin de les récuperer en tant que variable d'env
* J'ai défini 3 var d'env dans le Dockerfile

### Build de l'image
* J'ai build l'image avec `docker build -t weather`
* J'ai run pour faire un test avec `docker run -it weather --env LAT="" --env LONG="" --env API_KEY=""`
* J'ai crée un repository sur dockerhub
* J'ai push l'image dans le repository avec `docker push bblksam16/weather-api`
