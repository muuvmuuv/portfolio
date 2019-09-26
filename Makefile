up:
	docker-compose up -d
	printf "\n\e[1mServer is running at: \e[4mhttps://marvin.lcl/\e[0m\n"

rebuild:
	docker-compose build --no-cache

build:
	docker-compose build

destroy:
	docker-compose down

stop:
	docker-compose stop

top:
	docker-compose top nginx

intimg:
	docker run -it --entrypoint bash nginx

intcon:
	docker exec -i -t marvin-nginx bash

newcert:
	webssl --removeOld --addToKeychain
