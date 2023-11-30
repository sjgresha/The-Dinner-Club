const typeDefs = `
  type User {
    _id: ID
    username: String
    password: String
  }

  type ChatRoom {
    _id: ID
    name: String
  }

  type Message {
    _id: ID
    text: String
    user: User
    chatRoom: ChatRoom
    createdAt: String
  }

  type AuthPayload {
    token: String!
  }

  type Query {
    users: [User]
    user(username: String!): User
    chatRooms: [ChatRoom]
    messages: [Message]
  }

  type Mutation {
    addUser(username: String!, password: String!): User
    addChatRoom(name: String!): ChatRoom
    addMessage(text: String!, userId: ID!, chatRoomId: ID!): Message
    login(username: String!, password: String!): AuthPayload
  }

  type Subscription {
    messageAdded(chatRoomId: ID!): Message
  }
`;

module.exports = typeDefs;
