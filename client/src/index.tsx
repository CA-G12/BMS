import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ConfigProvider } from 'antd';
import ar_EG from 'antd/es/locale/ar_EG';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ConfigProvider direction="rtl" locale={ar_EG}>
    <App />
  </ConfigProvider>
);

