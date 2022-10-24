import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { LandingPage } from './pages';
import { AdminDashboard } from './Layouts';
import Login from './pages/Auth/Login';
import {
  Services, Bills, Flats,
} from './components/adminDashboard';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <LandingPage /> },
    ],
  },
  {
    path: '/auth',
    children: [
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
  {
    path: '/admin',
    element: <AdminDashboard />,
    children: [
      { index: true, element: <h1>statistics</h1> },
      { path: 'services', element: <Services /> },
      { path: 'bills', element: <Bills /> },
      { path: 'flats', element: <Flats /> },
    ],
  },
  { path: '*', element: <h1>page not found</h1> }]);

export default router;
