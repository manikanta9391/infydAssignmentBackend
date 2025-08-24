const express=require('express')
const exRouter=express.Router()
const {postNotification,
       getNotificationsById,
       postEvents,
       postUserLogin}=require('../Controllers/completeControllers')



exRouter.post('/notifications',postNotification)
exRouter.get('/notifications/:userId',getNotificationsById)



exRouter.post('/events',postEvents)


exRouter.post('/login',postUserLogin)



module.exports=exRouter