/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  '/': { view: 'pages/homepage' },

  /**
   * Department Route
   * POST, GET, PATCH, DELETE
   */

  'POST /departments' : 'DepartmentController.create',
  'GET /departments' : 'DepartmentController.find',
  'GET /departments/:department_id' : 'DepartmentController.findOne',
  'PATCH /departments/:department_id' : 'DepartmentController.update',
  'DELETE /departments/:department_id' : 'DepartmentController.delete',

  /**
   * Categories Route
   * POST, GET, PATCH, DELETE
   */


  // 'POST /categories' : 'CategoryController.create',
  // 'GET /categories' : 'CategoryController.find',
  // 'GET /categories/:categories_id' : 'CategoryController.findOne',
  // 'PATCH /categories/:categories_id' : 'CategoryController.update',
  // 'DELETE /categories/:categories_id' : 'CategoryController.delete',


};
