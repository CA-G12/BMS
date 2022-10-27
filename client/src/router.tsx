import { createBrowserRouter } from 'react-router-dom';
import { LandingPage } from './pages';
import { AdminDashboard } from './Layout';

import {
  Services, Bills, Flats,
} from './components/adminDashboard';
import Signup from './pages/auth/Signup';
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
    path: '/admin',
    element: <AdminDashboard />,
    children: [
      { index: true, element: <h1>statistics</h1> },
      { path: 'services', element: <Services /> },
      { path: 'bills', element: <Bills /> },
      { path: 'flats', element: <Flats /> },
      { path: 'auth/signup', element: <Signup /> },
    ],
  },
  { path: '*', element: <h1>page not found</h1> }]);

export default router;
