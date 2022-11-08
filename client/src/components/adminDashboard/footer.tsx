import { Layout } from 'antd';
import React from 'react';

const { Footer } = Layout;

const FooterSection: React.FC = () => (
  <Footer style={{
    background: '#fff',
    color: '#000',
    height: '48px',
    fontSize: '18px',
    textAlign: 'center',
    position: 'fixed',
    bottom: '0',
    left: '0',
    width: '100%',
    lineHeight: '15px',
    padding: '16px 0px',
    boxShadow: '0 0 10px -5px rgba(0 0 0 / 50%)',
  }}
  >
    جميع الحقوق محفوظة 2022

  </Footer>

);

export default FooterSection;
