import { DataTypes, Sequelize } from 'sequelize';
import { defineImageModel } from './image.model'; // Import the Image model

export const defineMissionModel = (sequelize: Sequelize) => {
  const Mission = sequelize.define('missions', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    title: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.GEOMETRY('POINT'),
      allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    folder_path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    notes: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
  });

  // Define associations
  Mission.hasMany(defineImageModel(sequelize), { foreignKey: 'image_id' });

  return Mission;
};