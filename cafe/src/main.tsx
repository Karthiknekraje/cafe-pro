import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import Games from './pages/Games.tsx';
import Cafe from './pages/Cafe.tsx';
import Events from './pages/Events.tsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/games',
    element: <Games />,
  },
  {
    path: '/cafe',
    element: <Cafe />,
  },
  {
    path: '/events',
    element: <Events />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);