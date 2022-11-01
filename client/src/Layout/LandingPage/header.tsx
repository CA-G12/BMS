import React, { useContext, useState } from 'react';

import { Anchor, Drawer, Button } from 'antd';
import { Link as ReactLink } from 'react-router-dom';
import logoImg from '../../assets/images/logo.png';
import authContext from '../../context';
import { UserContext } from '../../context/AuthContext';

const { Link } = Anchor;

const appHeader: React.FC = () => {
  const { user } = useContext(authContext) as UserContext;
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <img src={logoImg as string} alt="logo" />
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset={65}>
            <Link key="الرئيسية" href="#home" title="الرئيسية" />
            <Link key="تعرف علينا" href="#about-us" title="تعرف علينا" />
            <Link key="الاعلانات" href="#ads" title="الإعلانات" />
            <Link key="الشقق" href="#flats" title="الشقق" />
            <Link key="الخدمات" href="#services" title="الخدمات" />
            <Link key="تواصل معنا" href="#contact-us" title="تواصل معنا" />
            { (!user) ? (
              <ReactLink
                key="login"
                to="/auth/login"
                title=" "
                className="loginBtn"
              >
                تسجيل الدخول
              </ReactLink>
            ) : (
              <ReactLink
                key="login"
                to={user.role}
                title=" "
                className="loginBtn"
              >
                لوحة التحكم
              </ReactLink>
            )}

          </Anchor>
        </div>

        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars" />
          </Button>
          <Drawer
            title="BMS"
            placement="right"
            onClose={onClose}
            open={open}
          >
            <Anchor targetOffset={65}>
              <Link key="الرئيسية" href="#home" title="الرئيسية" />
              <Link key="تعرف علينا" href="#about-us" title="تعرف علينا" />
              <Link key="الاعلانات" href="#ads" title="الإعلانات" />
              <Link key="الشقق" href="#flats" title="الشقق" />
              <Link key="الخدمات" href="#services" title="الخدمات" />
              <Link key="تواصل معنا" href="#contact-us" title="تواصل معنا" />
              { (!user) ? (
                <ReactLink
                  key="login"
                  to="/auth/login"
                  title=" "
                  className="loginBtn"
                >
                  تسجيل الدخول
                </ReactLink>
              ) : (
                <ReactLink
                  key="login"
                  to={user.role}
                  title=" "
                  className="loginBtn"
                >
                  لوحة التحكم
                </ReactLink>
              )}
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default appHeader;
