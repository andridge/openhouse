const{House,User,Sequelize,}= require("./../models");
let self ={};
//
//create and save new house
self.save = async(req,res) => {
    try{
        let body = req.body;
        let data = await User.create(body);
        return res.json({
            status:"ok",
            data:data
        })
    }catch(error){
        res.status(500).json({
            status:"error",
            data:error
        })
    }
}
//
//get all houses 
self.getAll = async (req,res)=>{
    //
    try{
        //
        let data = await User.findAll({
            attributes:["firstName","lastName","houseId","email","phoneNumber"],
        });
        return res.json({
            status:"ok",
           data:data,
           })

    }catch (error){
    res.status(500).json({
        status:"error",
        data:error
             })
        }

}
//
//find one
self.get = async (req,res)=>{

    //
    try{
        let id = req.params.id;
        let data = await User.findOne({
            where:{
                id:id
            },
            attributes:["firstName","lastName","houseId","email","phoneNumber"],
        });
        return res.json({
            status:"ok",
            data:data
        })
    }catch(error){
        res.status(500).json({
            status:"error",
            data:error
        })
    }
}
//
self.update = async (req,res) => {
    //
        try{
            let id= req.params.id;
            let body = req.body;
            let data = await User.update(body,{
                attributes:["firstName","lastName","houseId","email","phoneNumber"],
                where:{
                    id:id
                },
            });
            return res.json({
                status:"ok",
                data:data
    
            })
        }catch(error){
            res.status(500).json({
                status:"error",
                data:error
            })
        }
}
//
//delete 
self.delete = async(req,res)=>{
    try{
        let id = req.params.id;
        let data = await User.destroy({
            where:{
                id:id
            }
        });
        return res.json({
            status:"ok",
            data:data
        })
    }catch(error){
        res.status(500).json({
            status:"error",
            data:error
        })
    }
}
//
//
//export models
module.exports = self;