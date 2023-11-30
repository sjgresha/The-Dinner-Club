const db = require('../config/connection');
const { User, Chat } = require('../models');
const userSeeds = require('./userSeeds.json');
const chatSeeds = require('./thoughtSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
    try {
      await cleanDB('Chat', 'chats');
      await cleanDB('User', 'users');
  
      await User.create(userSeeds);
  
      for (let i = 0; i < chatSeeds.length; i++) {
        const { _id, chatAuthor } = await Chat.create(chatSeeds[i]);
        const user = await User.findOneAndUpdate(
          { username: chatAuthor },
          {
            $addToSet: {
              chats: _id,
            },
          }
        );
      }
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  
    console.log('all done!');
    process.exit(0);
  });
  