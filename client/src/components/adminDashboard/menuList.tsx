/* eslint-disable react/prop-types */
import { useState, useContext } from 'react';
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
import authContext from '../../context';
import { UserContext } from '../../context/AuthContext';

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
const adminList: MenuItem[] = [
  getItem(<Link to="/admin" style={listStyle}>لوحة التحكم</Link>, '1', <GroupOutlined style={listStyle} />),
  getItem(<Link to="/admin/services" style={listStyle}>الخدمات</Link>, '2', <DesktopOutlined style={listStyle} />),
  getItem(<Link to="/admin/flats" style={listStyle}>الشقق</Link>, '3', <HomeOutlined style={listStyle} />),
  getItem(<Link to="/admin/bills" style={listStyle}>الفواتير</Link>, '4', <DollarCircleOutlined style={listStyle} />),
  getItem(<Link to="/admin/complaints" style={listStyle}>الشكاوي</Link>, '5', <CommentOutlined style={listStyle} />),
  getItem(<Link to="/admin/flats" style={listStyle}>الإعلانات</Link>, '6', <ContainerOutlined style={listStyle} />),
  getItem(<Link to="/admin/contacts" style={listStyle}>التواصل</Link>, '6', <MailOutlined style={listStyle} />),
  getItem(<Link to="/admin/flats" style={listStyle}>التقيم</Link>, '8', <StarOutlined style={listStyle} />),
  getItem(<Link to="/admin/flats" style={listStyle}>تسجيل الخروج</Link>, '9', <LogoutOutlined style={listStyle} />),
];

const userList: MenuItem[] = [
  getItem(<Link to="/user" style={listStyle}>لوحة التحكم</Link>, '1', <GroupOutlined style={listStyle} />),
  getItem(<Link to="/user/bills" style={listStyle}>الفواتير</Link>, '4', <DollarCircleOutlined style={listStyle} />),
  getItem(<Link to="/user/addComplaint" style={listStyle}>إضافة شكوى</Link>, '5', <CommentOutlined style={listStyle} />),
  getItem(<Link to="/user/announcements" style={listStyle}>الإعلانات</Link>, '6', <ContainerOutlined style={listStyle} />),
  getItem(<Link to="/user/logout" style={listStyle}>تسجيل الخروج</Link>, '9', <LogoutOutlined style={listStyle} />),
];

const MenuList: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { user } = useContext(authContext) as UserContext;

  return (
    <Sider collapsible theme="light" collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} reverseArrow>
      <Menu
        mode="inline"
        items={user?.role === 'admin' ? adminList : userList}
        defaultSelectedKeys={['1']}
      />
    </Sider>
  );
};

export default MenuList;
