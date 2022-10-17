/* eslint-disable import/extensions */
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import ar_EG from 'antd/es/locale/ar_EG';
import App from './pages/Landing';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <ConfigProvider direction="rtl" locale={ar_EG}>
    <App />
  </ConfigProvider>,
);
