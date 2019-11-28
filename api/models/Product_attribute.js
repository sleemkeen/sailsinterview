/**
 * Product_attribute.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes:{
      id: {
        type: 'number',
        columnName: 'product_id',
        required:true
      },
      attribute_value_id:{
          type:'number',
          required: true
      },
     
      
  }
   

  };


