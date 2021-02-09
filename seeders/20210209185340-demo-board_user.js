'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('board_users',[
     {
       board_id : 1,
       user_id : 1,
       createdAt : new Date(),
       updatedAt : new Date(),
     },
     {
       board_id : 1,
       user_id : 2,
       createdAt : new Date(),
       updatedAt : new Date(),
     },
     {
       board_id : 1,
       user_id : 3,
       createdAt : new Date(),
       updatedAt : new Date(),
     },
     {
       board_id : 1,
       user_id : 4,
       createdAt : new Date(),
       updatedAt : new Date(),
     },
     {
       board_id : 1,
       user_id : 5,
       createdAt : new Date(),
       updatedAt : new Date(),
     },
     {
       board_id : 2,
       user_id : 1,
       createdAt : new Date(),
       updatedAt : new Date(),
     },
     {
       board_id : 2,
       user_id : 2,
       createdAt : new Date(),
       updatedAt : new Date(),
     },
     {
       board_id : 2,
       user_id : 3,
       createdAt : new Date(),
       updatedAt : new Date(),
     },
     {
       board_id : 3,
       user_id : 1,
       createdAt : new Date(),
       updatedAt : new Date(),
     },
     {
       board_id : 3,
       user_id : 2,
       createdAt : new Date(),
       updatedAt : new Date(),
     },
     {
       board_id : 3,
       user_id : 3,
       createdAt : new Date(),
       updatedAt : new Date(),
     },
     {
       board_id : 3,
       user_id : 4,
       createdAt : new Date(),
       updatedAt : new Date(),
     },
     {
       board_id : 3,
       user_id : 5,
       createdAt : new Date(),
       updatedAt : new Date(),
     },
     {
       board_id : 3,
       user_id : 6,
       createdAt : new Date(),
       updatedAt : new Date(),
     },
     {
       board_id : 4,
       user_id : 2,
       createdAt : new Date(),
       updatedAt : new Date(),
     },
     {
       board_id : 4,
       user_id : 1,
       createdAt : new Date(),
       updatedAt : new Date(),
     },
     {
       board_id : 4,
       user_id : 3,
       createdAt : new Date(),
       updatedAt : new Date(),
     },
     {
       board_id : 4,
       user_id : 4,
       createdAt : new Date(),
       updatedAt : new Date(),
     },
     {
       board_id : 5,
       user_id : 2,
       createdAt : new Date(),
       updatedAt : new Date(),
     },
     {
       board_id : 6,
       user_id : 2,
       createdAt : new Date(),
       updatedAt : new Date(),
     },
     {
       board_id : 7,
       user_id : 3,
       createdAt : new Date(),
       updatedAt : new Date(),
     },
     {
       board_id : 8,
       user_id : 3,
       createdAt : new Date(),
       updatedAt : new Date(),
     },
     {
       board_id : 9,
       user_id : 3,
       createdAt : new Date(),
       updatedAt : new Date(),
     },
     {
       board_id : 10,
       user_id : 3,
       createdAt : new Date(),
       updatedAt : new Date(),
     },
     {
       board_id : 11,
       user_id : 3,
       createdAt : new Date(),
       updatedAt : new Date(),
     },
   ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('board_users', null, {});
  }
};
