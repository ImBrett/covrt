#-----------------------------------------------------------
# Docker
#-----------------------------------------------------------

status:
	docker-compose ps

up:
	docker-compose up

down:
	docker-compose down

restart: down up

build:
	docker-compose build

build-no-cache:
	docker-compose build --no-cache

rebuild: down build

#-----------------------------------------------------------
# App Commands
#-----------------------------------------------------------

lint:
	docker-compose exec covrt yarn lint --fix

#-----------------------------------------------------------
# Dependencies
#-----------------------------------------------------------

outdated-deps:
	docker-compose exec covrt yarn outdated

update-deps:
	docker-compose exec covrt yarn update
