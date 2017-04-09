FROM node:7.8

ENV PORT 3000

# [deprecated]
# use changes to package.json to force Docker not to use the cache
# # when we change our application's nodejs dependencies:
# ADD package.json /tmp/package.json
# RUN cd /tmp && npm install --no-bin-links --no-color --no-progress || npm install --no-bin-links --no-color --no-progress
# RUN mkdir -p /var/www && cp -a /tmp/node_modules /var/www/

# From here we load our application's code in, therefore the previous docker
# "layer" that has been cached will be used if possible
WORKDIR /var/www
ADD ./. /var/www

EXPOSE 3000

CMD npm run serve:dev
