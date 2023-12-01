import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom/dist'
import './index.css'

import App from './App.jsx'
import Home from './pages/Home';
import Signup from './pages/SignUp';
import Login from './pages/Login';
import User from './pages/User';
import ChatRoom from './pages/ChatRoom.jsx';
import Error from './pages/Error';

import { ChakraProvider } from '@chakra-ui/react'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      }, {
        path: '/me',
        element: <User />
      }, {
        path: '/users/:userId',
        element: <User />
      }, {
        path: 'chatrrooms/:chatRoomId',
        element: <ChatRoom />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <ChakraProvider>
//     <App />
//     </ChakraProvider>
//   </React.StrictMode>,
// )

