/**
 * Customer.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes:{
    id: {
      type: 'number',
      unique: true,
      columnName: 'customer_id',
      autoIncrement: true
    },
    name:{
    	type:'string',
        required: true
    },
    email:{
    	 type:'string',
         required: true,
         unique: true
    },
    password:{
    	 type:'string',
         required: true
    },
    credit_card:{
    	 type:'string',
         allowNull: true
    },
    address_1:{
    	 type:'string',
    	 allowNull: true
    },
    address_2:{
    	type:'string',
    	allowNull: true
    },
    city:{
    	type:'string',
    	allowNull: true
    },
    region:{
    	type:'string',
    	allowNull: true
    },
    postal_code:{
    	type:'string',
    	allowNull: true
    },
    country:{
    	type:'string',
    	allowNull: true
    },
    shipping_region_id:{
    	   type: 'number',
    	    defaultsTo: 1
    },
    day_phone:{
    	 type:'string',
    	 allowNull: true
    },
    eve_phone:{
    	 type:'string',
    	 allowNull: true
    },
    mob_phone:{
    	 type:'string',
    	 allowNull: true
    }	

    
}

};

