import React, { useState } from "react";
import { Button, Heading, AspectRatio, Image, Input } from '@chakra-ui/react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
      <Heading>
        Dinner Table Chats
      </Heading>
      <AspectRatio maxW='400px' ratio={4 / 3}>
        <Image src='dinner tables img.jpg'  objectFit='cover' />
      </AspectRatio>
      <div>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input
              value={username}
              onChange={(ev) => setUsername(ev.target.value)}
              placeholder="Username"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Password</FormLabel>
            <Input
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
              type="password"
              placeholder="Password"
            />
          </FormControl>

          <Button mt={4} colorScheme='teal' type="submit">
            Sign Up
          </Button>
        </form>
      </div>
    </>
  );
}
