# Things to take care of

- [Brotli](#brotli)

## Brotli

It is needed to build brotli from source because there is no official NGINX
package to download. Have a look at our multi stage build, tag **builder**.

- https://nixcp.com/brotli-compression-nginx/
- https://github.com/nginxinc/docker-nginx/issues/332
- https://hg.nginx.org/pkg-oss/file/tip/build_module.sh

Check Brotli compression with
`curl -ILk https://marvin.lcl/ -H "Accept-Encoding: br"`
