"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert("Books", [
      {
        title: "Learn NodeJS with Thomas",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Learn Sequelize with Adi",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {}
    );
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Books', null, {})
  },
};
