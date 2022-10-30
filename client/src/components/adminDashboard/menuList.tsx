import { useState } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
  GroupOutlined,
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

const { Sider } = Layout;

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
const items2: MenuItem[] = [
  getItem(<Link to="/admin" style={listStyle}>لوحة التحكم</Link>, '1', <GroupOutlined style={listStyle} />),
  getItem(<Link to="/admin/services" style={listStyle}>الخدمات</Link>, '2', <DesktopOutlined style={listStyle} />),
  getItem(<Link to="/admin/flats" style={listStyle}>الشقق</Link>, '3', <HomeOutlined style={listStyle} />),
  getItem(<Link to="/admin/bills" style={listStyle}>الفواتير</Link>, '4', <DollarCircleOutlined style={listStyle} />),
  getItem(<Link to="/admin/flats" style={listStyle}>الشكاوي</Link>, '5', <CommentOutlined style={listStyle} />),
  getItem(<Link to="/admin/flats" style={listStyle}>الإعلانات</Link>, '6', <ContainerOutlined style={listStyle} />),
  getItem(<Link to="/admin/contacts" style={listStyle}>التواصل</Link>, '6', <MailOutlined style={listStyle} />),
  getItem(<Link to="/admin/flats" style={listStyle}>التقيم</Link>, '8', <StarOutlined style={listStyle} />),
  getItem(<Link to="/admin/flats" style={listStyle}>تسجيل الخروج</Link>, '9', <LogoutOutlined style={listStyle} />),
];

const App: React.FC = () => (
  <div style={{ width: 256, backgroundColor: 'white', height: 'calc(100vh - 110px)' }}>
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
const MenuList: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider collapsible theme="light" collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} reverseArrow>
      <Menu
        mode="inline"
        items={items2}
        defaultSelectedKeys={['1']}
      />
    </Sider>
  );
};

export default MenuList;
