import { createBrowserRouter } from 'react-router-dom';

import { LandingPage, Flats, Flat } from './pages';
import { AdminDashboard } from './Layout';
import Login from './pages/Auth/Login';

import {
  Contacts, ServicesContainer, AddService, EditService, Bills, Announcements,
} from './components/adminDashboard';
import AddUser from './pages/AddUser';
import App from './App';
import NewAnnouncements from './components/adminDashboard/Announcements/NewAnnouncements';
import EditAnnouncements from './components/adminDashboard/Announcements/EditAnnouncements';

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
      { path: 'services', element: <ServicesContainer /> },
      { path: 'services/addService', element: <AddService /> },
      { path: 'services/editService/:id', element: <EditService /> },
      { path: 'bills', element: <Bills /> },
      { path: 'flats', element: <Flats /> },
      { path: 'announcements', element: <Announcements /> },
      { path: 'announcements/new', element: <NewAnnouncements /> },
      { path: 'announcements/edit/:id', element: <EditAnnouncements /> },
      { path: 'flats/:id', element: <Flat /> },
      { path: 'contacts', element: <Contacts /> },
      { path: 'adduser', element: <AddUser /> },
    ],
  },
  { path: '*', element: <h1>page not found</h1> }]);

export default router;
