# 20221129
JohannKouame's repository
1. Installations
Respecte le même processu d'installation que les TP précédents

3. Code
Le code de l'API est le même que celui du tp2. Cependant, le port exposé passe du 8081 au 80

4. Process utilisé
* Formater le `main.yaml` et le renommer en `TP2.yaml`différemment afin qu'il ne s'exécute qu'à la modification du dossier tp2 et/ou de tp2.yaml
* Créer `tp3.yaml`
* À la suite du contenu de `tp2.yaml`, ajouter les commande pour push l'image sur ACR et créer l'instance ACI
* Commit et push sur git hub
* Exécuter la commande `curl` pour accéder à l'API


3. Subtilités
* Il fallait spécifier dans le `.yaml`et dans code de l'API, le même port
* Azure s'expose automatiquement sur le port 80 et **apparemment** il n'est pas possible de le changer
* Il fallait donc exposer l'API sur ce port via le code (modifier dans àpi.js`)
