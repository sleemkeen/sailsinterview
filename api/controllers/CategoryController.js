module.exports ={

    
  /***************************************************************************
  * Method to create Categories                                          *
  ***************************************************************************/

    async create(req,res){
       try{
        let params = req.allParams();
       if(!params.name){
           return res.badRequest();
       }
       const results = await Category.create({
            name: params.name,
            description:params.description,
       }).fetch();

       return res.ok(results);

       }catch(err){
        return res.serverError(err);
       }

    },


  /***************************************************************************
  * Method retrieve the list of Category from the                      *
  * database and returns an array of Category objects to the user      *
  ***************************************************************************/

   async find(req,res){
        try {
            const Categories = await Category.find();
            return res.ok(Categories);
        } catch (error) {
            return res.serverError(error);
        }
    },

 
  /***************************************************************************
  * Method retrieve the list of Categorys from the                         *
  * database by id and returns objects of Category to user                 *
  ***************************************************************************/

   async findOne(req,res){
       
        try {
            const CategoryById = await Category.findOne({
                id: req.params.category_id
            });
            return res.ok(CategoryById);

        } catch (error) {
            return res.serverError(error);
        }
    }, 

     
  /***************************************************************************
  * Method retrieve the list of Categorys from the                         *
  * database by findByProductId and returns objects of Category to user                 *
  ***************************************************************************/

   async findByProduct(req,res){
        
    try {
        const CategoryById = await Category.findOne({
            id: req.params.category_id
        });
        return res.ok(CategoryById);

    } catch (error) {
        return res.serverError(error);
    }
}, 




  /***************************************************************************
  * Method to update Categorys by id                                       *
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
            
            const CategoryById = await Category.update({
                id: req.params.category_id
            }, attr);
            return res.ok(CategoryById);

        } catch (error) {
            return res.serverError(error);
        }
    },



  /***************************************************************************
  * Method to update delete by id                                       *
  ***************************************************************************/



   async delete(req,res){
         try {
            const deleted = await Category.destroy({
                id: req.params.category_id
            });
            return res.ok('record is deleted');
        }catch (error) {
        return res.serverError(error);
    }
}







}