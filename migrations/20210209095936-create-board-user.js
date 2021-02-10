'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('board_users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      board_id: {
        type: Sequelize.INTEGER,
        references : {
          model : 'boards',
          key : 'id'
        },
        allowNull : false,
        onDelete : 'CASCADE'
      },
      user_id: {
        type: Sequelize.INTEGER,
        references : {
          model : 'users',
          key : 'id'
        },
        allowNull : false,
        onDelete : 'CASCADE',
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
    await queryInterface.dropTable('board_users');
  }
};