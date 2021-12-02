FROM node:14.10-alpine

RUN mkdir /pet-adoption

WORKDIR /pet-adoption

COPY . /pet-adoption

RUN npm install

EXPOSE 8080

CMD [ "npm", "start" ]