import { Sequelize, Model, DataTypes } from "sequelize";
import dbConfig from "../config/db.config"; // Import your database configuration

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  port: dbConfig.port, // need to convert environment variable to integer
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db: Record<string, any> = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Add your models here (replace "YourModel" with the actual model names)
// For example, if you have an "images" model:
db.image = require("./image.model")(sequelize, Sequelize);
db.image_annotations = require("./image_annotations.model")(sequelize, Sequelize);

// Add other models similarly for your tables

export default db;
