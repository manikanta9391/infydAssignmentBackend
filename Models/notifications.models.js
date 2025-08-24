const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  notificationId: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  userId: {
    type: String,
    required: true,
    trim: true
  },
  type: {
    type: String,
    enum: ["Like", "Follow", "Comment"],
    required: true
  },
  content: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ["unread", "read"],
    default: "unread",
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const notificationModel=mongoose.model('notifications',notificationSchema)


module.exports=notificationModel
