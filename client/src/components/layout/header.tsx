import React, { useState } from 'react';

// import { Link } from 'react-router-dom';
import { Anchor, Drawer, Button } from 'antd';

import logoImg from '../../assets/images/logo.png';

import './style.css';

const { Link } = Anchor;

const appHeader: React.FC = () => {
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
            <Link key="الرئيسية" href="#main" title="الرئيسية" />
            <Link key="تعرف علينا" href="#about-us" title="تعرف علينا" />
            <Link key="الاعلانات" href="#avdertisements" title="الإعلانات" />
            <Link key="الشقق" href="#flats" title="الشقق" />
            <Link key="الخدمات" href="#services" title="الخدمات" />
            <Link key="تواصل معنا" href="#contact-us" title="تواصل معنا" />
            <Link
              key="login"
              href="/login"
              title="تسجيل الدخول"
            />
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
              <Link key="الرئيسية" href="#main" title="الرئيسية" />
              <Link key="تعرف علينا" href="#about-us" title="تعرف علينا" />
              <Link key="الاعلانات" href="#avdertisements" title="الإعلانات" />
              <Link key="الشقق" href="#flats" title="الشقق" />
              <Link key="الخدمات" href="#services" title="الخدمات" />
              <Link key="تواصل معنا" href="#contact-us" title="تواصل معنا" />
              <Link
                key="login"
                href="/login"
                title="تسجيل الدخول"
              />
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default appHeader;
// import React, { CSSProperties, FC, useState } from 'react';
// import {
//   Carousel, Button, Anchor, Drawer,
// } from 'antd';
// import type { SizeType } from 'antd/es/config-provider/SizeContext';
// import PropTypes from 'prop-types';
// import headerImage from '../../assets/images/header.png';
// import { NavBar } from './navbar';
// import { Title } from '../index';

// const { Link } = Anchor;

// interface SliderCartProps {
//   title: string;
//   btnTitle: string;
//   Link: string;
// }

// const SliderCart: React.FC<SliderCartProps> = ({ title, btnTitle, Link }) => {
//   const [size] = useState<SizeType>('large');
//   const redirectLink = (link: string): void => {
//     console.log(link);
//   };

//   const cardStyle: CSSProperties = {
//     marginTop: '64px',
//   };

//   return (
//     <div style={cardStyle}>
//       <Title
//         style={{
//           color: 'white !important',
//         }}
//       >
//         {title}

//       </Title>
//       <Button
//         style={{
//           backgroundColor: '#5138ec',
//         }}
//         type="primary"
//         size={size}
//         onClick={() => redirectLink(Link)}
//       >
//         {btnTitle}
//       </Button>
//     </div>
//   );
// };
// SliderCart.propTypes = {
//   title: PropTypes.string.isRequired,
//   btnTitle: PropTypes.string.isRequired,
//   Link: PropTypes.string.isRequired,
// };

// const Slider: FC = () => (
//   <div style={{
//     backgroundColor: '#000 !important',
//   }}
//   >
//     <NavBar selectedPage="Home" />
//     <Carousel
//       autoplay
//     >
//       <div>
//         <div style={contentStyle} className="sliderImage">
//           <SliderCart
//             title="تصميم نظام إدارة المباني"
//             btnTitle="قراءة المزيد"
//             Link="google.com"
//           />
//         </div>
//       </div>
//       <div>
//         <div style={contentStyle}>
//           <SliderCart
//             title="تصميم نظام إدارة المباني"
//             btnTitle="قراءة المزيد"
//             Link="google.com"
//           />
//         </div>
//       </div>
//       <div>
//         <div style={contentStyle}>
//           <SliderCart
//             title="تصميم نظام إدارة المباني"
//             btnTitle="قراءة المزيد"
//             Link="google.com"
//           />
//         </div>
//       </div>
//     </Carousel>
//   </div>
// );
// const Header: FC = () => (
//   <Slider />
// );

// export default Header;
