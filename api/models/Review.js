/**
 * Review.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

 attributes:{
     id: {
        type: 'number',
        columnName: 'review_id',
        autoIncrement: true,
        unique: true,
      },
     
      customer_id:{
          type:'number',
          required: true
      },
      product_id:{
          type:'number',
          required: true
      },
      review:{
        type:'string',
        required: true,

      },
      rating:{
        type:'number',
        required: true
      }
      
  }

};

