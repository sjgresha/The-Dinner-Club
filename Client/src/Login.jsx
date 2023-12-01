import React, { useState } from 'react';
import { Box,Text, Button, FormControl, FormLabel, Input, Stack, Link } from '@chakra-ui/react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your login logic goes here
    console.log('Login attempt:', { username, password });
  };

  return (
    <Box maxW="md" mx="auto" mt="8">
      <Stack spacing="4">
        <FormControl id="username">
          <FormLabel>Username</FormLabel>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Button colorScheme="teal" type="submit" onClick={handleSubmit}>
          Login
        </Button>
        <Text>Don't have an account? 
        <Link color="teal.500" href="/signup">
            Sign up here
        </Link>
        </Text>
      </Stack>
    </Box>
  );
};

export default Login;
