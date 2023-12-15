import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css'
import './index.css'


import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';
import App from './App'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
    {
      index: true,
      element: <HomePage />,
    },
    {
      path: 'AboutPage',
      element: <AboutPage />,
    },
  ],
  },
]);
    
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

