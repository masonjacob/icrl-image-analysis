import { Sequelize } from 'sequelize';
import dbConfig from '../config/db.config'; // Import your database configuration
import { defineImageModel } from './image.model';
import { defineImageAnnotationModel } from './image_annotation.model';

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  port: dbConfig.port,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {
  Sequelize,
  sequelize,
  image: defineImageModel(sequelize),
  image_annotations: defineImageAnnotationModel(sequelize),
};

// Add other models similarly for your tables

export default db;