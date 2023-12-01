const { Schema, model } = require('mongoose');

const chatRoomSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
});

const ChatRoom = model('ChatRoom', chatRoomSchema);

module.exports = ChatRoom;