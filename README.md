# Todo Web App

Simple Web App with [Express](https://expressjs.com/), [React](https://reactjs.org/), [Next.js](https://nextjs.org/) and [PostgreSQL](https://www.postgresql.org/)

And also:
  * [styled-components](https://www.styled-components.com/)
  * [docker](https://www.docker.com/)
  * [sequelize](https://sequelize.org/)

## Required Tools :hammer:
* `npm` or `yarn`
* `docker`
* `docker-compose`

## Setting up :wrench:

This article will show you how to setup environment for development

### Cloning repository :cloud:

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

### Installing packages :package:

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

---

### Starting containers with database and logger :rocket:

You can easily run containers with a simple command

#### Using npm
```shell
npm run dev
```
#### Using yarn
```shell
yarn dev
```

---

### Seeding database :seedling:

To start using database you need to initialize it and fill it with data

#### Using npm
```shell
npm run seed
```
#### Using yarn
```shell
yarn seed
```

---

### Starting services for development purposes :briefcase:

Web API server and Web (React App + Server) can be started by the commands below

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

Go to [localhost:3000](http://localhost:3000) in your browser and try it out! :collision:

---

### Note :notebook:

* `PostgreSQL` - `localhost:5432`
* `Logger` - `localhost:1337`
* `Web API` - `localhost:8080`
* `Web` - `localhost:3000`
