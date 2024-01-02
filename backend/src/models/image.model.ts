import { DataTypes, Sequelize } from 'sequelize';
// import { defineMissionModel } from './mission.model';
import { defineImageAnnotationModel } from './image_annotation.model';

export const defineImageModel = (sequelize: Sequelize) => {
  const Image = sequelize.define('images', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  // Define associations
  Image.hasMany(defineImageAnnotationModel(sequelize), {foreignKey: 'image_annotation_id'});
  // Image.belongsTo(defineMissionModel(sequelize), { foreignKey: 'mission_id', constraints: false});

  return Image;
};

 