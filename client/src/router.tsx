/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { createBrowserRouter } from 'react-router-dom';
import { Button } from 'antd';
import { DashboardLayout } from './Layout';

import { LandingPage, Flats, Flat } from './pages';
import Login from './pages/Auth/Login';

import {
  Contacts, Announcements,
  ServicesContainer, AddService, EditService, Bills,
  Complaints, SingleComplaints,
} from './components/adminDashboard';
import {
  UserAnnouncements, UserBills, AddComplaint,
} from './components/userDashboard';

import AddUser from './pages/AddUser';
import DataTable from './components/adminDashboard/complaints/DataTable';
import App from './App';
import UserProfile from './pages/UserProfile';
import NewAnnouncements from './components/adminDashboard/Announcements/NewAnnouncements';
import EditAnnouncements from './components/adminDashboard/Announcements/EditAnnouncements';
import { ProtectedRoute, LoginProtectedRoute } from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import Statistics from './components/adminDashboard/Statistics';
import Error from './pages/Errors';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <p>Public Error</p>,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },

  {
    path: '/auth',
    children: [
      {
        path: 'login',
        element:
  <AuthProvider>
    <LoginProtectedRoute>

      <Login />
    </LoginProtectedRoute>

  </AuthProvider>,
      },
    ],
  },

  {
    path: '/admin',
    element:
  <AuthProvider>
    <ProtectedRoute isAuthAdmin>
      <DashboardLayout />
    </ProtectedRoute>
  </AuthProvider>,

    children: [
      { index: true, element: <Statistics /> },
      { path: 'services', element: <ServicesContainer /> },
      { path: 'services/addService', element: <AddService /> },
      { path: 'services/editService/:id', element: <EditService /> },

      { path: 'bills', element: <Bills /> },
      {
        path: 'complaints',
        element: <Complaints />,
        children: [
          {
            index: true,
            element: <DataTable />,
          },
          {
            path: ':id',
            element: <SingleComplaints />,
          },
        ],
      },
      { path: 'announcements', element: <Announcements /> },
      { path: 'announcements/new', element: <NewAnnouncements /> },
      { path: 'announcements/edit/:id', element: <EditAnnouncements /> },
      {
        path: 'flats',
        element: <Flats />,
        children: [
          {
            path: ':id',
            element: <Flat />,
          },
        ],
      },

      { path: 'contacts', element: <Contacts /> },
      { path: 'adduser', element: <AddUser /> },
    ],
  },

  {
    path: '/user',
    element:
  <AuthProvider>
    <ProtectedRoute isAuthAdmin={false}>
      <DashboardLayout />
    </ProtectedRoute>
  </AuthProvider>,

    children: [
      { index: true, element: <UserProfile /> },
      { path: 'announcements', element: <UserAnnouncements /> },
      { path: 'bills', element: <UserBills /> },
      { path: 'addComplaint', element: <AddComplaint /> },
    ],
  },
  { path: '/error', element: <Error status={500} /> },
  { path: '*', element: <Error status={404} /> },
  // { path: '*', element: <h1>page not found</h1> },
]);

export default router;
