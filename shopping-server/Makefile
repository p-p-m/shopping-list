run:
	docker-compose up

build:
	docker-compose build

test:
	docker-compose run -e TESTING=true --rm web pytest /project

lint:
	docker-compose run --rm web flake8

db_migrate:
	docker-compose run --rm web flask db migrate

db_upgrade:
	docker-compose run --rm web flask db upgrade

shell:
	docker-compose run --rm web flask shell
