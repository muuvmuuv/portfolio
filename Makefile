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

logs:
	docker logs marvin-nginx

restart: restart-nginx
	# docker-compose restart marvin-xxxx

restart-nginx:
	docker exec marvin-nginx /usr/share/nginx-reload.sh

newcert:
	webssl --removeOld --addToKeychain


# ----------------------------
# Setup

create-env:
	if test -f .env.production; \
	then echo Production environment file already exist, exiting...; exit 0; \
	else cp .env.development .env.production; echo Created production environment file; \
	fi

create-dirs:
	mkdir -p reports
	mkdir -p docker/nginx/certs

setup: create-env create-dirs
	@echo Success!