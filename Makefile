
include .env

DOCKER='docker'
COMPOSE='docker-compose'

build:
	$(COMPOSE) build server

# ----- LOCAL DEVELOPMENT -----
clean:
	$(COMPOSE) down

start: build
	$(COMPOSE) up -d mysql && $(COMPOSE) run -d -e NODE_ENV=development --name server --service-ports --entrypoint=npm server run dev

bash:
	$(COMPOSE) run --entrypoint=sh server

# ----- TESTING -----
test: build
	$(COMPOSE) run -e NODE_ENV=test --entrypoint=npm server run test

# ----- PRODUCTION -----
prod: build
	$(COMPOSE) run -d -e NODE_ENV=production --entrypoint=npm 
