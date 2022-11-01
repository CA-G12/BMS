/* eslint-disable @typescript-eslint/no-floating-promises */
import { createBrowserRouter } from 'react-router-dom';

import { Button } from 'antd';
import { LandingPage, Flats, Flat } from './pages';
import { AdminDashboard } from './Layout';
import Login from './pages/Auth/Login';

import {
  Contacts, AddService, EditService, Bills, ServicesContainer,
} from './components/adminDashboard';
import AddUser from './pages/AddUser';
import App from './App';
import { ProtectedRoute, LoginProtectedRoute } from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';

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
      <AdminDashboard />
    </ProtectedRoute>
  </AuthProvider>,

    children: [
      { index: true, element: <Button type="primary">Primary Button</Button> },
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
    element:
  <AuthProvider>
    <ProtectedRoute isAuthAdmin={false}>
      <Button type="primary">userDashboard</Button>
    </ProtectedRoute>
  </AuthProvider>,

    children: [
      { index: true, element: <Button type="primary">Primary Button</Button> },
    ],
  },
  { path: '*', element: <h1>page not found</h1> }]);

export default router;
