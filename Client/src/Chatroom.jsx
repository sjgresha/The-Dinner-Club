import React from 'react';
import { Box, Input, Button } from '@chakra-ui/react';

const ChatRoom = () => {
  return (
    <Box>
    
      {/* Input box for typing messages */}
      <Input placeholder="Type your message..." />

      {/* Button to send messages */}
      <Button colorScheme="teal" mt={2}>
        Send
      </Button>
    </Box>
  );
};

export default ChatRoom;