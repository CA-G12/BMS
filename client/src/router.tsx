/* eslint-disable jsx-a11y/aria-role */
import { createBrowserRouter } from 'react-router-dom';
import { AdminDashboard } from './Layout';

import { LandingPage, Flats, Flat } from './pages';
import Login from './pages/Auth/Login';

import {
  Contacts, ServicesContainer, AddService, EditService, Bills,
} from './components/adminDashboard';
import { UserAnnouncements, UserBills, UserComplaints } from './components/userDashboard';

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
    element: <AdminDashboard role="admin" />,
    children: [
      { index: true, element: <h1>statistics</h1> },
      { path: 'services', element: <ServicesContainer /> },
      { path: 'services/addService', element: <AddService /> },
      { path: 'services/editService/:id', element: <EditService /> },
      { path: 'bills', element: <Bills /> },
      { path: 'flats', element: <Flats /> },
      { path: 'flats/:id', element: <Flat /> },
      { path: 'contacts', element: <Contacts /> },
      { path: 'adduser', element: <AddUser /> },
    ],
  },
  {
    path: '/user',
    element: <AdminDashboard role="user" />,
    children: [
      { index: true, element: <h1>User Page</h1> },
      { path: 'announcements', element: <UserAnnouncements /> },
      { path: 'bills', element: <UserBills /> },
      { path: 'complaints', element: <UserComplaints /> },
    ],
  },
  { path: '*', element: <h1>page not found</h1> }]);

export default router;
