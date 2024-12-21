FROM denoland/deno:latest

WORKDIR /app

# Copier d'abord uniquement les fichiers nécessaires pour les dépendances
COPY deps.ts deno.json deno.lock ./

# Mettre en cache les dépendances spécifiques de l'application
RUN deno cache deps.ts

# Copier le reste des fichiers de l'application
COPY lib/ lib/
COPY views/ views/
COPY Makefile .

# Exposer le port 8000
EXPOSE 8000

# Lancer les tests puis l'application avec les permissions nécessaires
CMD deno test lib/test.ts && deno run --allow-net --allow-read lib/main.ts