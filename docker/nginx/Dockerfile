ARG timezone=Europe/Berlin
ARG version

# ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
# Install brotli from source
# ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄

FROM nginx:${version} AS builder

ARG version

ENV build_deps "build-essential wget git apt-transport-https ca-certificates"

RUN printf "\n\e[96m>\e[0m\033[1m Install packages \e[0m\n\n" \
  && apt-get update \
  && apt-get install -y --no-install-recommends $build_deps \
  && echo "---"

RUN printf "\n\e[96m>\e[0m\033[1m Configure system \e[0m\n\n" \
  && mkdir /root/temp && cd /root/temp \
  && echo "---"

RUN printf "\n\e[96m>\e[0m\033[1m Download build module \e[0m\n\n" \
  && cd /root/temp \
  && wget https://hg.nginx.org/pkg-oss/raw-file/tip/build_module.sh \
  # remove sudo from file because we are sudo
  && sed -i -e '152,158d' -e 's/sudo //' ./build_module.sh \
  && echo "---"

RUN printf "\n\e[96m>\e[0m\033[1m Download brotli \e[0m\n\n" \
  && cd /root/temp \
  && git clone https://github.com/google/ngx_brotli.git \
  && cd ngx_brotli \
  && git submodule update --init --recursive \
  && echo "---"

RUN printf "\n\e[96m>\e[0m\033[1m Build brotli \e[0m\n\n" \
  && cd /root/temp \
  && sh ./build_module.sh -y -f -v ${version} ./ngx_brotli \
  && pkg=$(find /root/debuild/nginx-${version}/debian/debuild-module-brotli -type f -name "nginx-module-brotli_*.deb" -print) \
  && dpkg -i ${pkg} \
  && echo "---"


# ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
# NGINX
# ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄

FROM nginx:${version}

ARG timezone
ARG version

COPY --from=builder /usr/lib/nginx/modules/* /usr/lib/nginx/modules/

COPY share/entrypoint.sh    /usr/share/
COPY share/nginx-*.sh       /usr/share/

COPY conf.d/        /etc/nginx/conf.d/
COPY components/    /etc/nginx/components/
COPY nginx.conf     /etc/nginx/nginx.conf
COPY certs/*        /etc/nginx/ssl/


# ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
# Install packages

ENV build_deps ""

RUN printf "\n\e[96m>\e[0m\033[1m Install packages \e[0m\n\n" \
  && apt-get update \
  && apt-get install -y --no-install-recommends $build_deps \
  && echo "---"

# ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
# Configure System

RUN printf "\n\e[96m>\e[0m\033[1m Configure System \e[0m\n\n" \
  && ln -snf /usr/share/zoneinfo/$TIMEZONE /etc/localtime \
  && echo $TIMEZONE > /etc/timezone \
  && chmod +x /usr/share/entrypoint.sh \
  && chmod +x /usr/share/nginx-*.sh \
  && echo "---"

# ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
# Configure NGINX

RUN printf "\n\e[96m>\e[0m\033[1m Configure NGINX \e[0m\n\n" \
  && touch /var/run/nginx.pid \
  && chown -R 991:991 /var/run/nginx.pid \
  && echo "---"

# ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
# Cleaning

RUN printf "\n\e[96m>\e[0m\033[1m Cleaning \e[0m\n\n" \
  && rm -rf /var/lib/apt/lists/* \
  && apt-get purge -y $build_deps \
  && apt-get autoremove -y \
  && apt-get clean \
  && echo "---"


ENTRYPOINT ["/usr/share/entrypoint.sh"]

CMD ["nginx", "-g", "daemon off;"]
