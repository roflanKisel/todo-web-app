module.exports = {
  development: {
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'password',
    database: 'todo_web',
    dialect: 'postgres',
  },
  production: {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: 'todo_web',
    dialect: 'postgres',
  },
};
