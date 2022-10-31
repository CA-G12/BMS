import { useState } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
  GroupOutlined,
  ContainerOutlined,
  LogoutOutlined,
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
  getItem(<Link to="/user" style={listStyle}>لوحة التحكم</Link>, '1', <GroupOutlined style={listStyle} />),
  getItem(<Link to="/user/bills" style={listStyle}>الفواتير</Link>, '4', <DollarCircleOutlined style={listStyle} />),
  getItem(<Link to="/user/complaints" style={listStyle}>الشكاوي</Link>, '5', <CommentOutlined style={listStyle} />),
  getItem(<Link to="/user/announcements" style={listStyle}>الإعلانات</Link>, '6', <ContainerOutlined style={listStyle} />),
  getItem(<Link to="/user/logout" style={listStyle}>تسجيل الخروج</Link>, '9', <LogoutOutlined style={listStyle} />),
];

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
