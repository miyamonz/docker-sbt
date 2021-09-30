#!/bin/bash

OPENJDK_TAG=8u292
SBT_VERSION=0.13.17

docker build \
    --build-arg OPENJDK_TAG=$OPENJDK_TAG \
    --build-arg SBT_VERSION=$SBT_VERSION \
    --tag miyamonz/sbt:${OPENJDK_TAG}_${SBT_VERSION} \
    .

docker push miyamonz/sbt:${OPENJDK_TAG}_${SBT_VERSION}
