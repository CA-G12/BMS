import React, { CSSProperties } from 'react';
import {
  Row, Col, Typography, Layout, Menu, Button,
} from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import './style.css';

const { Header, Content } = Layout;
const { Title } = Typography;

export interface NavBarProps {
  selectedPage: string;
//   children: React.ReactNode | undefined;
}

export const NavBar: React.FC<NavBarProps> = ({ selectedPage }) => {
  const gotoPage = (page: string) => {
  // GO TO MENU ITEM PAGE
  };

  const headerStyle : CSSProperties = {
    position: 'absolute',
    width: '100%',
    zIndex: '1',
    backgroundColor: 'transparent !important',
  };

  return (
    <div style={headerStyle}>
      <Row justify="space-around">
        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
          <Header className="header-fixed">
            <Row>
              <Col xl={12} lg={12} md={12} sm={20} xs={20}>
                <Title id="title-button" level={4}>
                  <a href="/">My App</a>
                </Title>
              </Col>
              <Col xl={12} lg={12} md={12} sm={4} xs={4}>
                <Menu
                  theme="dark"
                  style={{
                    backgroundColor:
                  'transparent !important',
                  }}
                  mode="horizontal"
                  defaultSelectedKeys={['home']}
                  overflowedIndicator={<MenuOutlined />}
                >
                  <Menu.Item
                    key="home"
                    onClick={() => gotoPage('item1')}
                  >
                    الرئيسية
                  </Menu.Item>
                  <Menu.Item
                    key="aboutus"
                    onClick={() => gotoPage('item2')}
                  >
                    تعرف علينا
                  </Menu.Item>
                  <Menu.Item
                    key="announcements"
                    onClick={() => gotoPage('item3')}
                  >
                    الاعلانات
                  </Menu.Item>
                  <Menu.Item
                    key="services"
                    onClick={() => gotoPage('item1')}
                  >
                    الخدمات
                  </Menu.Item>
                  <Menu.Item
                    key="avialbleflats"
                    onClick={() => gotoPage('item2')}
                  >
                    شقق متاحة
                  </Menu.Item>
                  <Menu.Item
                    key="contactus"
                    onClick={() => gotoPage('item3')}
                  >
                    تواصل معنا
                  </Menu.Item>
                  <Menu.Item
                    className="loginBtn"
                    key="login"
                    onClick={() => gotoPage('item3')}
                  >
                    <Button type="primary">سجل الدخول</Button>
                  </Menu.Item>
                </Menu>
              </Col>
            </Row>
          </Header>
          {/* <Content>Content</Content> */}
        </Col>
      </Row>
    </div>
  );
};
