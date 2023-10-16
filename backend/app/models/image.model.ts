// models/Image.ts
import { DataTypes, Model, Sequelize } from 'sequelize';

export const defineImageModel = (sequelize: Sequelize) => {
  const Image = sequelize.define('images', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    image: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
  });

  return Image;
};