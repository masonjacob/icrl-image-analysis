// models/ImageAnnotation.ts

import { DataTypes, Model, Sequelize } from 'sequelize';

export const defineImageAnnotationModel = (sequelize: Sequelize) => {
  const ImageAnnotation = sequelize.define('image_annotations', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    image_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    coordinates: {
      type: DataTypes.GEOMETRY('POINT'),
      allowNull: false,
    },
    notes: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
  });

  // Define associations
  ImageAnnotation.belongsTo(Image, { foreignKey: 'image_id' });

  return ImageAnnotation;
};