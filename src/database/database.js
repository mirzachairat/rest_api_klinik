// import Sequelize from "sequelize";

// export const sequelize = new Sequelize(
//   "postgres", // db name,
//   "postgres", // username
//   "bismillah123", // password
//   {
//     hostaddr: "34.172.198.10",
//     dialect: "postgres",
//     pool: {
//       max: 5,
//       min: 0,
//       require: 30000,
//       idle: 10000,
//     },
//     logging: false,
//   }
// );

// export const sequelize = new Sequelize(
//   "postgres", // db name,
//   "postgres", // username
//   "bismillah123", // password
//   {
//     dialect: 'postgres',
//     host: '/cloudsql/${veteriner-382105:us-central1:dbveteriner}',
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     },
//     dialectOptions: {
//         // e.g. socketPath: '/cloudsql/my-awesome-project:us-central1:my-cloud-sql-instance'
//         // same as host string above
//         socketPath: '/cloudsql/${veteriner-382105:us-central1:dbveteriner}'
//     },
//     logging: false,
//     operatorsAliases: false
//   }
// );


  import Sequelize from "sequelize";

  export const sequelize = new Sequelize('postgres', 'postgres', 'bismillah123', {
    host: "https://34.172.198.10",
    port: 5432,
    dialect: 'postgres', 
    });

