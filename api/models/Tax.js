/**
 * Tax.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    
    id: {
        type: 'number',
        columnName: 'tax_id',
        autoIncrement: true,
        unique: true,
      },

      tax_type:{
          type:'string',
          required: true
      },
       tax_percentage:{
            type: 'number',
            columnType: 'decimal(10,2)',
            required: true
      },
     

  },

};

