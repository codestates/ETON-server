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
   await queryInterface.bulkInsert('progresses',[
     {
       title : 'demo-progress1',
       board_id : 1,
       createdAt: new Date(),
       updatedAt : new Date()
     },
     {
       title : 'demo-progress2',
       board_id : 1,
       createdAt: new Date(),
       updatedAt : new Date()
     },
     {
       title : 'demo-progress3',
       board_id : 1,
       createdAt: new Date(),
       updatedAt : new Date()
     },
     {
       title : 'demo-progress4',
       board_id : 1,
       createdAt: new Date(),
       updatedAt : new Date()
     },
     {
       title : 'demo-progress5',
       board_id : 2,
       createdAt: new Date(),
       updatedAt : new Date()
     },
     {
       title : 'demo-progress6',
       board_id : 2,
       createdAt: new Date(),
       updatedAt : new Date()
     },
     {
       title : 'demo-progress7',
       board_id : 3,
       createdAt: new Date(),
       updatedAt : new Date()
     },
     {
       title : 'demo-progress8',
       board_id : 3,
       createdAt: new Date(),
       updatedAt : new Date()
     },
     {
       title : 'demo-progress9',
       board_id : 3,
       createdAt: new Date(),
       updatedAt : new Date()
     },
     {
       title : 'demo-progress10',
       board_id : 3,
       createdAt: new Date(),
       updatedAt : new Date()
     },
     {
       title : 'demo-progress11',
       board_id : 4,
       createdAt: new Date(),
       updatedAt : new Date()
     },
     {
       title : 'demo-progress12',
       board_id : 5,
       createdAt: new Date(),
       updatedAt : new Date()
     },
     {
       title : 'demo-progress13',
       board_id : 6,
       createdAt: new Date(),
       updatedAt : new Date()
     },
     {
       title : 'demo-progress14',
       board_id : 6,
       createdAt: new Date(),
       updatedAt : new Date()
     },
     {
       title : 'demo-progress15',
       board_id : 7,
       createdAt: new Date(),
       updatedAt : new Date()
     },
     {
       title : 'demo-progress16',
       board_id : 8,
       createdAt: new Date(),
       updatedAt : new Date()
     },
     {
       title : 'demo-progress17',
       board_id : 9,
       createdAt: new Date(),
       updatedAt : new Date()
     },
     {
       title : 'demo-progress18',
       board_id : 10,
       createdAt: new Date(),
       updatedAt : new Date()
     },
     {
       title : 'demo-progress19',
       board_id : 11,
       createdAt: new Date(),
       updatedAt : new Date()
     },
     {
       title : 'demo-progress20',
       board_id : 11,
       createdAt: new Date(),
       updatedAt : new Date()
     },
     {
       title : 'demo-progress21',
       board_id : 11,
       createdAt: new Date(),
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
    await queryInterface.bulkDelete('progresses', null, {}); 
  }
};
