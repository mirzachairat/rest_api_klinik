import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  "dbklinik", // db name,
  "dbklinik", // username
  "bismillah123", // password
  {
    host: "ls-ec1a3706a9b2a26c1c2f11d2cb27e0af3db6eea3.c1vcltt5dygy.ap-southeast-1.rds.amazonaws.com",
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
