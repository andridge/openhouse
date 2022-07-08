'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Houses', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      propertyName: {
        type: Sequelize.STRING
      },
      latitude: {
        type: Sequelize.DECIMAL(11,8)
      },
      longitude: {
        type: Sequelize.DECIMAL(11,8)
      },
      sizePerSquare: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.DECIMAL(12,2)
      },
      propertyType: {
        type: Sequelize.STRING
      },
      Bathrooms: {
        type: Sequelize.INTEGER
      },
      parking: {
        type: Sequelize.INTEGER
      },
      bedrooms: {
        type: Sequelize.INTEGER
      },
      pool: {
        type: Sequelize.STRING
      },
      picture: {
        type: Sequelize.BLOB
      },
      propertyStatus: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Houses');
  }
};