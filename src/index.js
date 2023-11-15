import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SelectFases from './routes/SelectFases'
import Home from './routes/Home';
import Jogo from './routes/Jogo';
import NotFound from './routes/404';
import PlayerInfo from './routes/Player_info';
import Creditos from './routes/Creditos';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },

  {
    path: "playerinfo/:editar",
    element: <PlayerInfo />
  },

  {
    path: "jogo/:fase",
    element: <Jogo />
  },

  {
    path: "selectFases",
    element: <SelectFases/>
  },

  {
    path: "credits",
    element: <Creditos />
  },

  {
    path: '*',
    element: <NotFound/>
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);