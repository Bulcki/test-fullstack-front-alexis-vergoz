.PHONY: up down build test

# Construire et démarrer les conteneurs
up:
	docker-compose up --build

# Arrêter les conteneurs
down:
	docker-compose down

# Construire les images
build:
	docker-compose build

# Exécuter les tests
test:
	docker-compose run --rm app deno test

# Nettoyer les conteneurs et images non utilisés
clean:
	docker-compose down --rmi all --volumes --remove-orphans