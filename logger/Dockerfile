FROM node:carbon-alpine

RUN mkdir /app
WORKDIR /app

COPY package.json ./

RUN yarn

COPY . .

EXPOSE 1337
CMD ["yarn", "start"]
