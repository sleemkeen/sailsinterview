/**
 * Product.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes:{
      id: {
        type: 'number',
        unique: true,
        columnName: 'product_id',
        autoIncrement: true
      },
      name:{
          type:'string',
          required: true
      },
      description:{
          type:'string',
          required: true
      },
       price:{
          type:'string',
          required: true
      },
      discounted_price:{
          type:'string',
          required: true
      },
      image:{
          type:'string',
          required: true
      },
      image_2:{
          type:'string',
          required: true
      },
      thumbnail:{
        type:'string',
        required: true
      },
      display:{
        type:'number',
        defaultsTo: 0
      }

      
  }
   

  };


