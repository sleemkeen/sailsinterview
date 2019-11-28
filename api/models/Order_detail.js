/**
 * Order_detail.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes:{
    id: {
      type: 'number',
      unique: true,
      columnName: 'item_id',
      autoIncrement: true
    },
    order_id:{
    	type:'number',
      required: true
    },
    product_id:{
      type:'number',
      required: true
    },
    attributes:{
      type:'string',
      required: true
    },
    product_name:{
      type:'string',
      required: true
    },
    quantity:{
      type:'number',
      required: true
    },
    unit_cost:{
      type: 'number',
      columnType: 'decimal(10,2)',
      required: true
    },

    
}

};

