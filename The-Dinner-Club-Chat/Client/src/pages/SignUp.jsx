import React, { useState } from "react";
import { Button, Heading, AspectRatio, Image} from '@chakra-ui/react';

export default function SignUp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
       
    };

    return (
        <>
            <Heading>
                Dinner Table Chats
            </Heading>
            <AspectRatio maxW='400px' ratio={4 / 3}>
            <Image src='dinner tables img.jpg' alt='naruto' objectFit='cover' />
            </AspectRatio>
            <div>
                <form onSubmit={handleSubmit}>
            
                        <input
                            value={username}
                            onChange={ev => setUsername(ev.target.value)}
                            className="SignupInput"
                            type="text"
                            placeholder="Username"
                        />

                
                        <input
                            value={password}
                            onChange={ev => setPassword(ev.target.value)}
                            className="SignupInput"
                            type="password" // Change to password type for secure input
                            placeholder="Password"
                        />
                    

                    <Button colorScheme = 'teal' type="submit">Sign Up</Button>
                </form>
            </div>
        </>
    );
}