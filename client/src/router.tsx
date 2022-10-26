import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { LandingPage } from './pages';
import { AdminDashboard } from './Layouts';

import {
  Services, Bills, Flats,
} from './components/adminDashboard';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <p>Public Error</p>,
    children: [
      { index: true, element: <LandingPage /> },
    ],
  },
  {
    path: '/admin',
    element: <AdminDashboard />,
    // errorElement: <p>Admin Error</p>,
    children: [
      { index: true, element: <h1>statistics</h1> },
      { path: 'services', element: <Services /> },
      { path: 'bills', element: <Bills /> },
      { path: 'flats', element: <Flats /> },
    ],
  },
  { path: '*', element: <h1>page not found</h1> }]);

export default router;
