const notificationModel=require('../Models/notifications.models')
const { v4: uuidv4 } = require('uuid');

const getElementaryById=(elementaryMethod)=>{
    return async function(req,res) {
        try{
           const {userId}=req.params
           console.log(userId)
           const details=await elementaryMethod.find({userId, status:"unread"})
           console.log(details)
           if(!details){
              res.status(400).json({
                message:"User not Found"
              })
           }
           res.status(200).json({
            message:"succesful",
            details
           })

        }
        catch(err){
             res.status(500).json({
                error: "Internal server error"
             })
        }
    }
}


const postElementaryMethod = (elementaryModel) => {
  return async function (req, res) {
    try {
      const details = req.body;
      console.log(details)
      const newDoc = await elementaryModel.create(details);

       await notificationModel.create({
         notificationId:uuidv4(),
          userId:details.targetUserId,
          type:details.type,
          content:details.data,
       })

       res.status(201).json({
        newDoc
    });     
    } 
    catch (err) 
    {
      console.error("Error creating document:", err);
      res.status(500).json({
         error: "Internal server error" 
     });
    }
  };
};


const postNotificatioMethod=(elementaryModel)=>{
    return async function (req,res) {
        try {
            const details = req.body;
            const newDoc = await elementaryModel.create(details);

            res.status(201).json({
                newDoc
            });     
        } 
        catch (err) 
        {
            console.error("Error creating document:", err);
            res.status(500).json({
            error: "Internal server error" 
            });
        }
    }
}

const postUserLoginMethod=(elementaryMethod)=>{
    return async function(req,res) {
        try{
           const userDetails=req.body
           const details=await elementaryMethod.findOne(userDetails)
           if(!details){
              res.status(400).json({
                message:"Invalid Credintials"
              })
           }
           res.status(200).json({
            message:"succesful",
            details
           })

        }
        catch(err){
             res.status(500).json({
                error: "Internal server error"
             })
        }
    }
}




module.exports={getElementaryById,postElementaryMethod,postUserLoginMethod,postNotificatioMethod}