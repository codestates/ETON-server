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
   await queryInterface.bulkInsert('boards',[
     {
        title : 'demo-board1',
        admin_userid : 1,
        createdAt : new Date(),
        updatedAt : new Date()
     },
     {
        title : 'demo-board2',
        admin_userid : 1,
        createdAt : new Date(),
        updatedAt : new Date()
     },
     {
        title : 'demo-board3',
        admin_userid : 1,
        createdAt : new Date(),
        updatedAt : new Date()
     },
     {
        title : 'demo-board4',
        admin_userid : 2,
        createdAt : new Date(),
        updatedAt : new Date()
     },
     {
        title : 'demo-board5',
        admin_userid : 2,
        createdAt : new Date(),
        updatedAt : new Date()
     },
     {
        title : 'demo-board6',
        admin_userid : 2,
        createdAt : new Date(),
        updatedAt : new Date()
     },
     {
        title : 'demo-board7',
        admin_userid : 3,
        createdAt : new Date(),
        updatedAt : new Date()
     },
     {
        title : 'demo-board8',
        admin_userid : 3,
        createdAt : new Date(),
        updatedAt : new Date()
     },
     {
        title : 'demo-board9',
        admin_userid : 3,
        createdAt : new Date(),
        updatedAt : new Date()
     },
     {
        title : 'demo-board10',
        admin_userid : 3,
        createdAt : new Date(),
        updatedAt : new Date()
     },
     {
        title : 'demo-board11',
        admin_userid : 3,
        createdAt : new Date(),
        updatedAt : new Date()
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
    await queryInterface.bulkDelete('boards', null, {}); 
  }
};
