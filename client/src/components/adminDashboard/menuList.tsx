import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  LogoutOutlined,
  StarOutlined,
  HomeOutlined,
  DollarCircleOutlined,
  CommentOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React, { Children } from 'react';
import { Link } from 'react-router-dom';

  type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: React.ReactNode,
  type?: 'group',

): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
const listStyle = {
  color: 'black',
};
const items: MenuItem[] = [
  getItem(<Link to="/admin/services" style={listStyle}>الخدمات</Link>, '1', <DesktopOutlined style={listStyle} />),
  getItem(<Link to="/admin/flats" style={listStyle}>الشقق</Link>, '2', <HomeOutlined style={listStyle} />),
  getItem(<Link to="/admin/bills" style={listStyle}>الفواتير</Link>, '3', <DollarCircleOutlined style={listStyle} />),
  getItem(<Link to="/admin/flats" style={listStyle}>الشكاوي</Link>, '4', <CommentOutlined style={listStyle} />),
  getItem(<Link to="/admin/flats" style={listStyle}>الإعلانات</Link>, '5', <ContainerOutlined style={listStyle} />),
  getItem(<Link to="/admin/flats" style={listStyle}>التواصل</Link>, '6', <MailOutlined style={listStyle} />),
  getItem(<Link to="/admin/flats" style={listStyle}>التقيم</Link>, '7', <StarOutlined style={listStyle} />),
  getItem(<Link to="/admin/flats" style={listStyle}>تسجيل الخروج</Link>, '8', <LogoutOutlined style={listStyle} />),
];

const App: React.FC = () => (
  <div style={{ width: 256, backgroundColor: 'white' }}>
    <div style={{ display: 'flex', backgroundColor: 'white' }}>
      <AppstoreOutlined style={{
        color: 'black', fontSize: 'x-large', display: 'inline-block', marginTop: 26, marginRight: 19,
      }}
      />
      <Link
        className="title"
        style={{
          color: 'black', padding: 10, margin: 10, fontWeight: 'bold', fontSize: 'x-large',
        }}
        to="/admin"
      >
        لوحة التحكم
      </Link>
    </div>
    .
    <Menu
          // defaultSelectedKeys={['1']}
          // defaultOpenKeys={['sub1']}
      style={{ height: '100%', borderRight: 0, backgroundColor: 'white' }}
      mode="inline"
      theme="dark"
      items={items}
    />
  </div>
);

export default App;
