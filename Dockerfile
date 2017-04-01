FROM ubuntu:16.04

MAINTAINER tocology <tocology@nearbyproject.com>

# install essential units
RUN apt-get update
RUN apt-get install -y curl

# install nodejs
RUN curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
RUN apt-get install -y nodejs build-essential

# use changes to package.json to force Docker not to use the cache
# # when we change our application's nodejs dependencies:
ADD package.json /tmp/package.json
RUN cd /tmp && npm install --no-bin-links || npm install --no-bin-links
RUN npm install -g babel-cli
RUN mkdir -p /var/www && cp -a /tmp/node_modules /var/www/

# From here we load our application's code in, therefore the previous docker
# "layer" thats been cached will be used if possible
WORKDIR /var/www
ADD . /var/www

# ENV NODE_ENV devlopment
EXPOSE 3001

ENV PORT 3001
ENV NODE_ENV production

CMD npm build
# CMD npm serve:dev
