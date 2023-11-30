//const bcrypt = require('bcrypt'); Might need to implement somehow
const { User, Messages, ChatRoom } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },

    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },

    chatRooms: async () => {
      return ChatRoom.find();
    },

    messages: async () => {
      return Messages.find();
    },
  },

  Mutation: {
    addUser: async (parent, {username, password}) => {
      const user = await User.create({ username, password });
      const token = signToken(user);

      return { token, user };
    },

    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },

    addChatRoom: async (parent, { name }) => {
      return ChatRoom.create({ name });

    },

    addMessage: async (parent, {text, userId, chatRoomId}) => {
      const message = new Messages({ text, user: userId, chatRoom: chatRoomId });
      return await message.save();
    }
  },
  Subscription: {
    messageAdded: {
      subscribe: async (_, { chatRoomId }, { pubsub }) => {
        const asyncIterator = pubsub.asyncIterator(`MESSAGE_ADDED_${chatRoomId}`);
        return await asyncIterator;
      },
    },
  },
};

module.exports = resolvers;
