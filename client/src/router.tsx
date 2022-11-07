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
import NewAnnouncements from './components/adminDashboard/Announcements/NewAnnouncements';
import EditAnnouncements from './components/adminDashboard/Announcements/EditAnnouncements';
import { ProtectedRoute, LoginProtectedRoute } from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';

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
      { index: true, element: <h1>لوحة التحكم</h1> },
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

      { path: 'flats', element: <Flats /> },
      { path: 'flats/:id', element: <Flat /> },

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
      { index: true, element: <Button type="primary">Primary Button</Button> },
      { path: 'announcements', element: <UserAnnouncements /> },
      { path: 'bills', element: <UserBills /> },
      { path: 'addComplaint', element: <AddComplaint /> },
    ],
  },
  { path: '*', element: <h1>page not found</h1> }]);

export default router;
