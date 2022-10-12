import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ConfigProvider } from 'antd';
import ar_EG from 'antd/es/locale/ar_EG';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
<<<<<<< HEAD
  <App />
=======
  <ConfigProvider direction="rtl" locale={ar_EG}>
    <App />
  </ConfigProvider>
>>>>>>> bd86d4452d0054db5e943ee373b10d136bf59a1a
);

