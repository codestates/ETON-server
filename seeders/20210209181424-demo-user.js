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
   await queryInterface.bulkInsert('users',[
     {
     username : 'demo-user',
     password : 'password123@',
     email : '1@demo.com',
     createdAt : new Date(),
     updatedAt : new Date()
    },
     {
     username : 'demo-user2',
     password : 'password123@',
     email : '2@demo.com',
     createdAt : new Date(),
     updatedAt : new Date()
    },
     {
     username : 'demo-user3',
     password : 'password123@',
     email : '3@demo.com',
     createdAt : new Date(),
     updatedAt : new Date()
    },
     {
     username : 'demo-user4',
     password : 'password123@',
     email : '4@demo.com',
     createdAt : new Date(),
     updatedAt : new Date()
    },
     {
     username : 'demo-user5',
     password : 'password123@',
     email : '5@demo.com',
     createdAt : new Date(),
     updatedAt : new Date()
    },
     {
     username : 'demo-user6',
     password : 'password123@',
     email : '6@demo.com',
     createdAt : new Date(),
     updatedAt : new Date()
    },
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {}); 
  }
};
