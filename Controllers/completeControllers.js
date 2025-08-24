const userModel=require('../Models/users.model')
const notificationModel=require('../Models/notifications.models')
const eventModel=require('../Models/events.models')
const {getElementaryById,
       postElementaryMethod,
       postUserLoginMethod,
       postNotificatioMethod}=require('../Views/viewHandler')



const postNotification=postNotificatioMethod(notificationModel)
const getNotificationsById=getElementaryById(notificationModel)


const postEvents=postElementaryMethod(eventModel)



const postUserLogin=postUserLoginMethod(userModel)




module.exports={postNotification,getNotificationsById,postEvents,postUserLogin}