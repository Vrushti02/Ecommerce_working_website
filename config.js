const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
// console.log("env",process.env)
module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DBNAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
   
  }
}