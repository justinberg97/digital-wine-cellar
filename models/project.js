const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Project extends Model {}

Project.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    maker: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    grape: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    vintage_date: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    abv: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    rating: {
    type: Boolean
    },
  
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'project',
  }
);

module.exports = Project;