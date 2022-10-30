import { createBrowserRouter } from 'react-router-dom';
import { LandingPage } from './pages';
import { AdminDashboard } from './Layout';

import {
  Contacts, ServicesContainer, AddService, EditService, Bills, Flats,
} from './components/adminDashboard';
import AddUser from './pages/AddUser';
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
      { path: 'services', element: <ServicesContainer /> },
      { path: 'services/addService', element: <AddService /> },
      { path: 'services/editService/:id', element: <EditService /> },
      { path: 'bills', element: <Bills /> },
      { path: 'flats', element: <Flats /> },
      { path: 'contacts', element: <Contacts /> },
      { path: 'adduser', element: <AddUser /> },
    ],
  },
  { path: '*', element: <h1>page not found</h1> }]);

export default router;
