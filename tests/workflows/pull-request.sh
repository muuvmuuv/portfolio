# https://github.com/nektos/act
# Node buster version must match with node version from workflow

act -r -P ubuntu-latest=node:12-buster pull_request
