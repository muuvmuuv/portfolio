ARG timezone=Europe/Berlin
ARG version

ARG build_dir="/usr/share/tmp"
ARG modules_dir="/usr/lib/nginx/modules"

# ----------------------------
# Install brotli from source
# ----------------------------

FROM debian:10.2 AS builder

ARG version
ARG build_dir
ARG modules_dir

ENV build_deps "ca-certificates wget git build-essential libpcre3-dev zlib1g-dev"

# ----------------------------
# Install packages

RUN printf "\n\e[96m>\e[0m\033[1m Install packages \e[0m\n\n" \
  && apt-get update \
  && apt-get install -y --no-install-recommends $build_deps \
  && echo "---"

# ----------------------------
# Setup system

RUN printf "\n\e[96m>\e[0m\033[1m Setup system \e[0m\n\n" \
  && mkdir -p ${build_dir} \
  && mkdir -p ${modules_dir} \
  && echo "---"

# ----------------------------
# Download NGINX

RUN printf "\n\e[96m>\e[0m\033[1m Download NGINX \e[0m\n\n" \
  && cd ${build_dir} \
  && wget https://nginx.org/download/nginx-${version}.tar.gz \
  && tar zxf nginx-${version}.tar.gz \
  && rm nginx-${version}.tar.gz \
  && echo "---"

# ----------------------------
# Download brotli

RUN printf "\n\e[96m>\e[0m\033[1m Download brotli \e[0m\n\n" \
  && cd ${build_dir} \
  && git clone --recursive https://github.com/google/ngx_brotli.git \
  && echo "---"

# ----------------------------
# Install NGINX with brotli module

RUN printf "\n\e[96m>\e[0m\033[1m Install NGINX with brotli module \e[0m\n\n" \
  && cd ${build_dir}/nginx-${version} \
  && ./configure --with-compat $(cat build_args.txt) --add-dynamic-module=../ngx_brotli \
  && make install \
  && echo "---"

# ----------------------------
# Move compiled modules

RUN printf "\n\e[96m>\e[0m\033[1m Move compiled modules \e[0m\n\n" \
  && cd ${build_dir}/nginx-${version} \
  && cp objs/ngx_http_brotli_filter_module.so  ${modules_dir} \
  && chmod 644 ${modules_dir}/ngx_http_brotli_filter_module.so \
  && cp objs/ngx_http_brotli_static_module.so ${modules_dir} \
  && chmod 644 ${modules_dir}/ngx_http_brotli_static_module.so \
  && echo "---"


# ----------------------------
# NGINX
# ----------------------------

FROM nginx:${version}

ARG timezone
ARG version
ARG modules_dir

COPY --from=builder ${modules_dir}/* ${modules_dir}/

COPY share/*        /usr/share/
COPY conf.d/        /etc/nginx/conf.d/
COPY components/    /etc/nginx/components/
COPY nginx.conf     /etc/nginx/nginx.conf
COPY certs/*        /etc/nginx/ssl/

# ----------------------------
# Configure System

RUN printf "\n\e[96m>\e[0m\033[1m Configure System \e[0m\n\n" \
  && ln -snf /usr/share/zoneinfo/$TIMEZONE /etc/localtime \
  && echo $TIMEZONE > /etc/timezone \
  && chmod +x /usr/share/entrypoint.sh \
  && chmod +x /usr/share/nginx-*.sh \
  && echo "---"


ENTRYPOINT ["/usr/share/entrypoint.sh"]

CMD ["nginx", "-g", "daemon off;"]
