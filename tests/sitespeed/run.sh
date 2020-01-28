#!/bin/bash

DOCKER_CONTAINER=sitespeedio/sitespeed.io:11.9.3-plus1
DOCKER_NETWORK="--net=portfolio_frontend"
DOCKER_CONFIG="--cap-add=NET_ADMIN --shm-size=1g --rm"
DOCKER_ENVS="-e MAX_OLD_SPACE_SIZE=3072"
DOCKER_VOLUMES="-v "$(pwd)":/sitespeed.io -e MAX_OLD_SPACE_SIZE=3072"
DOCKER_SETUP="$DOCKER_NETWORK $DOCKER_CONFIG $DOCKER_VOLUMES $DOCKER_ENVS"
CONFIG="--config /sitespeed.io/tests/sitespeed/config"

# Start

docker run $DOCKER_SETUP $DOCKER_CONTAINER $CONFIG/common.json https://marvin.lcl/

# Remove the current container so we fetch the latest autobuild the next time
# If you run a stable version (as YOU should), you don't need to remove the container,
# instead make sure you remove all volumes (of data)
# docker volume prune -f
# docker system prune --all --volumes -f
