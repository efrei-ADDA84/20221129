# Utilisez l'image Node.js officielle en tant qu'image de base
FROM node:14

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers nécessaires dans le conteneur
COPY package.json package-lock.json ./
COPY api.js .

# Installer les dépendances
RUN npm install openweather-api-node
RUN npm install node-fetch
RUN npm install express

ENV API_KEY=""
# Exposer les ports
EXPOSE 8081
# Commande par défaut à exécuter lorsque le conteneur est démarré
CMD ["node", "api.js"]