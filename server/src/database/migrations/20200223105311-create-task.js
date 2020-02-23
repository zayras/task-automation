'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: { allowNull: false, type: Sequelize.STRING },
      username: { allowNull: false, type: Sequelize.STRING },
      password: { allowNull: false, type: Sequelize.STRING },
      remote: { allowNull: false, type: Sequelize.STRING },
      port: { allowNull: false, type: Sequelize.STRING },
      criteria: { allowNull: false, type: Sequelize.STRING },
      commands: { allowNull: false, type: Sequelize.STRING },
      delay: { allowNull: false, type: Sequelize.INTEGER },
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tasks');
  }
};