import Sequelize from "sequelize";
const {
    DB_NAME,
    DB_PASSWORD,
    DB_USER,
    DB_URI,
    DB_PORT
  } = process.env 

export const sequelize = new Sequelize(
  DB_NAME, // db name,
  DB_USER, // username
  DB_PASSWORD, // password
  {
    hostaddr: DB_URI,
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      require: 30000,
      idle: 10000,
    },
    logging: false,
  }
);

  