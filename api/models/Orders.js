/**
 * Orders.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

 module.exports = {

 	attributes:{
 		id: {
 			type: 'number',
 			unique: true,
 			columnName: 'order_id',
 			autoIncrement: true
 		},
 		total_amount:{
 			type: 'number',
 			columnType: 'decimal(10,2)',
 			required: true
 		},
 		shipped_on:{
 			type: 'string',
 			columnType: 'date'

 		},
 		status:{
 			type: 'number',
 			defaultsTo: 0
 		},
 		comments:{
 			type: 'string',
 			allowNull: true,
 		},
 		customer_id:{
 			type: 'number',
 			required: true
 		},
 		auth_code:{
 			type:'string',
 			allowNull:true
 		},
 		auth_code:{
 			type:'string',
 			allowNull:true
 		},
 		shipping_id:{
 			type:'number',
 			allowNull:true
 		},
 		tax_id:{
 			type:'number',
 			allowNull:true
 		} 

 	}

 };

