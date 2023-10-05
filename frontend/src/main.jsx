import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import './index.css'

import HomePage from './Pages/HomePage/HomePage.jsx';
import GamePage from './Pages/GamePage';
import Layout from './components/Layout/Layout';
import LoginPage from './Pages/LoginPage/LoginPage';
import GamePageNoLogin from './Pages/GamePageNoLogin';
import UserProvider from './user/UserProvider';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import LevelPreviewPage from './Pages/LevelPreviewPage';
import TutorialPage from './Pages/Tutorial/TutorialPage';
import HighscorePage from './Pages/HighscorePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />
  },
  {
    path: "/game",
    element: <GamePageNoLogin />,
  },
  {
    path: "/levels",
    element: <LevelPreviewPage />,
  },
  {
    path: "/how-to-play",
    element: <TutorialPage />,
  },
  
  {
    path: "/account",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <ProtectedRoute component={HomePage} />
      },
      {
        path: "game",
        element: <ProtectedRoute component={GamePage} />
      },
      {
        path: "highscore",
        element: <ProtectedRoute component={HighscorePage} />,
      },
    ]
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
    <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
