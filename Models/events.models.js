const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  eventId: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  type: {
    type: String,
    enum: ["Like", "Follow", "Comment"], 
    required: true
  },
  sourceUserId: {
    type: String,
    required: true,
    trim: true
  },
  targetUserId: {
    type: String, 
    required: true,
    trim: true
  },
  data: {
    type: Object, 
    default: {}
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});


const eventModel=mongoose.model('events',eventSchema)

module.exports=eventModel
