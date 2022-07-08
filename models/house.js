'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class House extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  House.init({
    propertyName: DataTypes.STRING,
    latitude: DataTypes.DECIMAL(11,8),
    longitude: DataTypes.DECIMAL(11,8),
    sizePerSquare: DataTypes.INTEGER,
    price: DataTypes.DECIMAL(12,2),
    propertyType: DataTypes.STRING,
    Bathrooms: DataTypes.INTEGER,
    parking: DataTypes.INTEGER,
    bedrooms: DataTypes.INTEGER,
    pool: DataTypes.STRING,
    picture: DataTypes.BLOB,
    propertyStatus: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'House',
  });
  return House;
};