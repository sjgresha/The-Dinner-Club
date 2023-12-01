import React, { useState } from "react";
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth'; 

import { Button, Heading, AspectRatio, Image } from '@chakra-ui/react';
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
} from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'

export default function SignUp() {
    const [formState, setFormState] = useState({
        username: '',
        password: '',
      });
      const [addUser, { error, data }] = useMutation(ADD_USER);
    
      const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
      };
    
      const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
    
        try {
          const { data } = await addUser({
            variables: { ...formState },
          });
    
          Auth.login(data.addUser.token);
        } catch (e) {
          console.error(e);
        }
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
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
                <form onSubmit={handleFormSubmit}>

                    <input
                        className="SignupInput"
                        placeholder="Username"
                        name="username"
                        type="text"
                        value={formState.name}
                        onChange={handleChange}
                    />


                    <input
                        className="SignupInput"
                        placeholder="Password"
                        name="password"
                        type="password"
                        value={formState.password}
                        onChange={handleChange}
                    />


                    <Button colorScheme='teal' type="submit">Sign Up</Button>
                </form>
            )}
            
            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
            </div>

            <UnorderedList>
                <Card><ListItem>Chat Room 1</ListItem></Card>
                <Card> <ListItem>Chat Room 2</ListItem></Card>
                <Card><ListItem>Chat Room 3</ListItem></Card>
                <Card> <ListItem>Chat Room 4</ListItem></Card>
            </UnorderedList>
        </>
    );
}

// import React, { useState } from "react";
// import { Button, Heading, AspectRatio, Image} from '@chakra-ui/react';

// export default function SignUp() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = (event) => {
//         event.preventDefault();
       
//     };

//     return (
//         <>
//             <Heading>
//                 Dinner Table Chats
//             </Heading>
//             <AspectRatio maxW='400px' ratio={4 / 3}>
//             <Image src='dinner tables img.jpg' alt='naruto' objectFit='cover' />
//             </AspectRatio>
//             <div>
//                 <form onSubmit={handleSubmit}>
            
//                         <input
//                             value={username}
//                             onChange={ev => setUsername(ev.target.value)}
//                             className="SignupInput"
//                             type="text"
//                             placeholder="Username"
//                         />

                
//                         <input
//                             value={password}
//                             onChange={ev => setPassword(ev.target.value)}
//                             className="SignupInput"
//                             type="password" // Change to password type for secure input
//                             placeholder="Password"
//                         />
                    

//                     <Button colorScheme = 'teal' type="submit">Sign Up</Button>
//                 </form>
//             </div>
//         </>
//     );
// }