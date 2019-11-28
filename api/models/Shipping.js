/**
 * Shipping.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    id: {
        type: 'number',
        columnName: 'shipping_id',
        autoIncrement: true,
        unique: true,
      },
     
      shipping_type:{
          type:'string',
          required: true
      },
      shipping_cost:{
          type:'number',
          required: true
      },
      shipping_region_id:{
        type: "number",
        required: true
      }

  },

};

