import { Navigate, useParams } from 'react-router-dom'; //not sure if needed
import { useQuery } from '@apollo/client';

import { GET_CHAT_ROOMS } from '../utils/queries';

const Home = () => {
    const { loading, error, data } = useQuery(GET_CHAT_ROOMS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const chatRooms = data.chatRooms;

    return (
        <div>
            <h2>Chat Rooms</h2>
            {chatRooms.map((room) => (
                <div key={room.id}>
                    <h3>{room.name}</h3>
                    <p>{room.description}</p>
                    {/* Add a link/button to navigate to the chat room */}
                    <button onClick={() => navigateToChatRoom(room.id)}>Join Room</button>
                </div>
            ))}
        </div>
    );
};

export default Home;