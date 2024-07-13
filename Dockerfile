FROM node:latest

WORKDIR /usr/app

COPY ./package*.json ./

RUN apk add curl
RUN npm install

COPY ./ ./

EXPOSE 6000

USER node


CMD ["npm", "start" ]
