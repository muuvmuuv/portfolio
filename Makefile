up:
	docker-compose up -d
	printf "\n\e[1mServer is running at: \e[4mhttps://marvin.lcl/\e[0m\n"

rebuild:
	docker-compose build --no-cache

build:
	docker-compose build

destroy:
	docker-compose down --volumes

stop:
	docker-compose stop

start:
	docker-compose start

restart: restart-nginx
	# docker-compose restart marvin-xxxx

restart-nginx:
	docker exec marvin-nginx /usr/share/nginx-reload.sh

newcert:
	webssl --removeOld --addToKeychain


# ----------------------------
# Setup

create-env:
	cp .env.development .env.production

create-reports-dir:
	mkdir -p reports

setup: create-env create-reports-dir