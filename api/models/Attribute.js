/**
 * Attribute.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {


    attributes:{
      id: {
        type: 'number',
        unique: true,
        columnName: 'attribute_id',
        autoIncrement: true
      },
      name:{
        type : 'string',
        required: true

      }
      
  }


};

