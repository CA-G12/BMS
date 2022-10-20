/* eslint-disable import/extensions */
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import ar_EG from 'antd/es/locale/ar_EG';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <ConfigProvider direction="rtl" locale={ar_EG}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ConfigProvider>,
);
