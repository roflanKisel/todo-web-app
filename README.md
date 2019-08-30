# Todo Web App

Simple Web App with [Express](https://expressjs.com/), [React](https://reactjs.org/), [Next.js](https://nextjs.org/) and [PostgreSQL](https://www.postgresql.org/)

## Required Tools
* `npm` or `yarn`
* `docker`
* `docker-compose`

## Setting up

### Cloning repository

You need to clone this repository

#### Using HTTPS
```shell
git clone https://github.com/roflanKisel/todo-web-app.git
```
#### Using SSH
```shell
git clone git@github.com:roflanKisel/todo-web-app.git
```
---

### Installing packages

You need to install packages for `db`, `web-api` and `web`

#### Using npm
```shell
cd db && npm install
cd web-api && npm install
cd web && npm install
```
#### Using yarn
```shell
cd db && yarn
cd web-api && yarn
cd web && yarn
```

### Starting containers with database and logger

You can easily run containers using simple command

#### Using npm
```shell
npm run dev
```
#### Using yarn
```shell
yarn dev
```

### Starting services for development purposes

Web API server and Web (React App + Server) can be started by this command

#### Using npm
```shell
cd web-api && npm start
cd web && npm run dev
```
#### Using yarn
```shell
cd web-api && yarn start
cd web && yarn dev
```

### Note

* `PostgreSQL` - `localhost:5432`
* `Logger` - `localhost:1337`
* `Web API` - `localhost:8080`
* `Web` - `localhost:3000`

Go to [localhost:3000](http://localhost:3000) in your browser and try it out 
