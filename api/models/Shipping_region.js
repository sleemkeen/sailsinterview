/**
 * Shipping_region.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    id: {
        type: 'number',
        columnName: 'shipping_region_id',
        autoIncrement: true,
        unique: true,
      },
     
      shipping_region:{
          type:'string',
          required: true
      },
     
  },

};

