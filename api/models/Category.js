/**
 * Category.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes:{
      id: {
        type: 'number',
        unique: true,
        columnName: 'category_id',
        autoIncrement: true
      },
      department_id:{
        type: 'number',
        unique: true,
      },
      name:{
          type:'string',
          required: true
      },
      description:{
          type:'string'
      },
      
  }
   

  };


