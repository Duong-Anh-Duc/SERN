'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email : 'admin@gmail.com',
        password : '123456',
        firstName : 'Duong',
        lastName : 'Duc',
        address : 'VN',
        gender : 1,
        typeRole : 'ROLE',
        keyRole : 'R1',
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ]);
  },
   down (queryInterface, Sequelize) {
  }
};
