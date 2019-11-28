/**
 * Attribute_value.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  
  attributes:{

    id: {
      type: 'number',
      unique: true,
      columnName: 'attribute_value_id',
      autoIncrement: true
    },
    attribute_id: {
      type: 'number',
      unique: true,
    },
    value:{
        type:'string',
        required: true
    }
    
    
}

};

