module.exports ={

    
  /***************************************************************************
  * Method to create departments                                          *
  ***************************************************************************/

    async create(req,res){
       try{
        let params = req.allParams();
       if(!params.name){
           return res.badRequest();
       }
       const results = await Department.create({
            name: params.name,
            description:params.description,
       }).fetch();

       return res.ok(results);

       }catch(err){
        return res.serverError(err);
       }

    },


  /***************************************************************************
  * Method retrieve the list of departments from the                     *
  * database and returns an array of department objects to the user      *
  ***************************************************************************/

   async find(req,res){
        try {
            const departments = await Department.find();
            return res.ok(departments);
        } catch (error) {
            return res.serverError(error);
        }
    },

 
  /***************************************************************************
  * Method retrieve the list of departments from the                         *
  * database by id and returns objects of department to user                 *
  ***************************************************************************/

   async findOne(req,res){
       
        try {
            const departmentById = await Department.findOne({
                id: req.params.department_id
            });
            return res.ok(departmentById);

        } catch (error) {
            return res.serverError(error);
        }
    }, 




  /***************************************************************************
  * Method to update departments by id                                       *
  ***************************************************************************/


    async update(req,res){
        try {

            let params = req.allParams();
            let attr = {};
            if(params.name){
                attr.name = params.name;
            }
            if(params.description){
                attr.description = params.description;
            }
            
            const departmentById = await Department.update({
                id: req.params.department_id
            }, attr);
            return res.ok(departmentById);

        } catch (error) {
            return res.serverError(error);
        }
    },



  /***************************************************************************
  * Method to update delete by id                                       *
  ***************************************************************************/



   async delete(req,res){
         try {
            const deleted = await Department.destroy({
                id: req.params.department_id
            });
            return res.ok('record is deleted');
        }catch (error) {
        return res.serverError(error);
    }
}
}