const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const messagesSchema = new Schema({
    Messages: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 60,
      trim: true,
    },
    messageUser: {
      type: Types.ObjectId,
      ref: 'User',
      required: true,
      trim: true,
    },
    chatRoom: {
      type: Types.ObjectId,
      ref: 'ChatRoom',
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
  });
  
  const Messages = model('Messages', messagesSchema);
  
  module.exports = Messages;