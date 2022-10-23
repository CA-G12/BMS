import React, { useState } from 'react';

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
          <img src={logoImg} alt="logo" />
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset="65">
            <Link key="الرئيسية">الرئيسية</Link>
            <Link key="تعرف علينا">نعرف علينا</Link>
            <Link key="الاعلانات">الاعلانات</Link>
            <Link key="الشقق">الشقق</Link>
            <Link key="الخدمات">الخدمات</Link>
            <Link key="تواصل معنا">تواصل معنا</Link>
            <Link
              key="login"
            >
              <Button type="primary">سجل الدخول</Button>
            </Link>
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
            <Anchor targetOffset="65">
              <Link key="الرئيسية">الرئيسية</Link>
              <Link key="تعرف علينا">نعرف علينا</Link>
              <Link key="الاعلانات">الاعلانات</Link>
              <Link key="الشقق">الشقق</Link>
              <Link key="الخدمات">الخدمات</Link>
              <Link key="تواصل معنا">تواصل معنا</Link>
              <Link
                key="login"
              >
                <Button type="primary">سجل الدخول</Button>
              </Link>
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
