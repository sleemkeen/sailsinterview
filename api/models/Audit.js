/**
 * Audit.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes:{
    id: {
      type: 'number',
      unique: true,
      columnName: 'audit_id',
      autoIncrement: true
    },
    order_id:{
      type: 'number',
      unique: true,
    },
   
    message:{
      type: 'string',
      required: true,
    },
    code:{
      type: 'number',
      required: true
    }
    
}

};

