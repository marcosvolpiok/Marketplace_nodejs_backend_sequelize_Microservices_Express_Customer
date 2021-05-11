'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('OrderStates', [
        {name: 'En espera de revisión', description: 'La marca todavía no abrió el pedido', updated_at: new Date(), created_at: new Date()},
        {name: 'Leído', description: 'La marca leyó el pedido', updated_at: new Date(), created_at: new Date()},
        {name: 'Stock modificado', description: 'La marca modificó el stock, aceptalo o rechazalo', updated_at: new Date(), created_at: new Date()},
        {name: 'En espera de pago', description: 'La marca está esperando el pago', updated_at: new Date(), created_at: new Date()},
        {name: 'Enviado', description: 'La marca envió el pedido', updated_at: new Date(), created_at: new Date()},
        {name: 'Cancelado', description: 'La marca canceló el pedido', updated_at: new Date(), created_at: new Date()},
        {name: 'Completo', description: 'El pedido se completó', updated_at: new Date(), created_at: new Date()},
        
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('OrderStates', null, {});

  }
};
