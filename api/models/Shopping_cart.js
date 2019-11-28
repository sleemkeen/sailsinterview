/**
 * Shopping_cart.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

   
    id: {
        type: 'number',
        columnName: 'item_id',
        autoIncrement: true,
        unique: true,
      },
     
     cart_id: {
        type: 'number',
        required: true,
      },
     
      product_id:{
          type:'number',
          required: true
      },

      attributes:{
          type:'string',
          required: true
      },
       quantity:{
          type:'number',
          required: true
      },
      buy_now:{
          type:'number',
          required: true
      },
       

  },

};

