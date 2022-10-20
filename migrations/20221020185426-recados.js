'use strict';

    module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('recados', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primaryKey:true
    },

    nome: { 
        type: Sequelize.STRING,
        allowNull: false
    },


    descricao: { 
        type: Sequelize.TEXT,
        allowNull: false
    },
    });
    /**
     * Add altering commands here.
     *
     * Example:
     */
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('recados');
    /**
     * Add reverting commands here.
     *
     * Example:
     */
  }
};
