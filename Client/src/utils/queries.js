import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
    }
  }
`;

export const GET_CHAT_ROOMS = gql`
  query GetChatRooms {
    chatRooms {
      id
      name
      description
    }
  }
`;

export const GET_CHAT_ROOM_MESSAGES = gql`
  query GetChatRoomMessages($roomId: ID!) {
    chatRoomMessages(roomId: $roomId) {
      id
      text
      user {
        id
        username
      }
    }
  }
`;