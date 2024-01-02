import { DataTypes, Sequelize } from 'sequelize';

export const defineImageAnnotationModel = (sequelize: Sequelize) => {
  const ImageAnnotation = sequelize.define('image_annotations', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    coordinates: {
      type: DataTypes.GEOMETRY('POINT'),
      allowNull: false,
    },
    shape: {
      type: DataTypes.ENUM("point", "star", "circle", "rectangle"),
      allowNull: false,
    },
    size: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    color: {
      type: DataTypes.STRING,
      defaultValue: "#000000",
    },
    notes: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
  });

  // Define associations
  // ImageAnnotation.belongsTo(defineImageModel(sequelize), { foreignKey: 'image_id', constraints: false});

  return ImageAnnotation;
};