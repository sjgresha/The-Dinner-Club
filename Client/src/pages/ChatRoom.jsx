import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_CHAT_ROOM_MESSAGES } from '../utils/queries';

const ChatRoom = () => {
    const { roomId } = useParams();
    const { loading, error, data } = useQuery(GET_CHAT_ROOM_MESSAGES, {
        variables: { roomId },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const messages = data.chatRoomMessages;

    return (
        <div>
            <h2>Chat Room {roomId}</h2>
            <div>
                {messages.map((message) => (
                    <div key={message.id}>
                        <p>{message.text}</p>
                        <p>{message.user.username}</p>
                    </div>
                ))}
            </div>
            {/* Add a form for users to send messages */}
            <form>
                <input type="text" placeholder="Type your message" />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ChatRoom;