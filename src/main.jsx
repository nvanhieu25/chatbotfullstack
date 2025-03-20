import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './routes/homepage/Homepage'
import DashboardPage from './routes/dashboardPage/DashboardPage'
import Chatpage from './routes/chatPage/Chatpage.jsx'
import RootLayout from './layouts/rootLayout/RootLayout.jsx'
import DashboardLayout from './layouts/dashboardLayout/DashboardLayout.jsx'
import SignInPage from './routes/signInPage/signInPage.jsx'
import SignUpPage from './routes/signUpPage/signUpPage.jsx'

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/sign-in/*",
        element: <SignInPage />,
      },
      {
        path: "/sign-up/*",
        element: <SignUpPage />,
      },
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <DashboardPage />,
          },
          {
            path: "/dashboard/chats/:id",
            element: <Chatpage />,
          }
        ]
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);
