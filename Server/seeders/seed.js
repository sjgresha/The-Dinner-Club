const db = require('../config/connections');
const { User, ChatRoom, Messages } = require('../models');
const userSeeds = require('./userSeeds.json');
const chatRoomSeeds = require('./chatRoomSeeds.json');
const messageSeeds = require('./messageSeeds.json');
const cleanDB = require('./cleanDB');

// const seedData = async () => {
//   try {
//     await cleanDB('User', 'users');
//     await cleanDB('ChatRoom', 'chatrooms');
//     await cleanDB('Message', 'messages');

//     await User.create(userSeeds);

//     const chatRoomPromises = chatRoomSeeds.map(async (chatRoomSeed) => {
//       const { _id: chatRoomId } = await ChatRoom.create({ name: chatRoomSeed.name });

//       // Seed messages for each chat room
//       const messagesForRoom = messageSeeds.filter((message) => message.chatRoom === chatRoomSeed.name);

//       const messagePromises = messagesForRoom.map(async (message) => {
//         const { _id: userId } = await User.findOne({ username: message.author });
//         await Messages.create({ text: message.text, user: userId, chatRoom: chatRoomId });
//       });

//       await Promise.all(messagePromises);
//     });

//     await Promise.all(chatRoomPromises);

//     console.log('Seeding completed successfully!');

//   } catch (err) {
//     console.error(err);
//   } finally {
//     // Close the connection after seeding
//     db.close();
//   }
// };

// // Connect to MongoDB
// db.once('open', seedData);

db.once('open', async () => {
  try {
    await cleanDB('User', 'users');
    await cleanDB('ChatRoom', 'chatrooms');
    await cleanDB('Message', 'messages');

    await User.create(userSeeds);

    const chatRoomPromises = chatRoomSeeds.map(async (chatRoomSeed) => {
      const { _id: chatRoomId } = await ChatRoom.create({ name: chatRoomSeed.name });

      // Seed messages for each chat room
      const messagesForRoom = messageSeeds.filter((message) => message.chatRoom === chatRoomSeed.name);

      const messagePromises = messagesForRoom.map(async (message) => {
        const { _id: userId } = await User.findOne({ username: message.author });
        await Messages.create({ text: message.text, user: userId, chatRoom: chatRoomId });
      });

      await Promise.all(messagePromises);
    });

    await Promise.all(chatRoomPromises);

    console.log('Seeding completed successfully!');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);

})