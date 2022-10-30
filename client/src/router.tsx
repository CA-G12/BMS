import { createBrowserRouter } from 'react-router-dom';
import { LandingPage } from './pages';
import { AdminDashboard } from './Layout';

import {
  ServicesContainer, AddService, EditService, Bills, Flats,
  Complaints, SingleComplaints, Contacts,
} from './components/adminDashboard';

import AddUser from './pages/AddUser';
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
      { index: true, element: <h1>لوحة التحكم</h1> },
      { path: 'services', element: <ServicesContainer /> },
      { path: 'services/addService', element: <AddService /> },
      { path: 'services/editService/:id', element: <EditService /> },
      { path: 'bills', element: <Bills /> },
      { path: 'complaints', element: <Complaints /> },
      { path: 'complaints/show/:id', element: <SingleComplaints /> },
      { path: 'flats', element: <Flats /> },
      { path: 'contacts', element: <Contacts /> },
      { path: 'adduser', element: <AddUser /> },
    ],
  },
  { path: '*', element: <h1>page not found</h1> }]);

export default router;
