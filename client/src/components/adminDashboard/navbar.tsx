/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Image } from 'antd';
import React, { useContext } from 'react';
import logoImg from '../../assets/images/logo.png';
import authContext from '../../context';

import './style.css';

const NavBar: React.FC = () => {
  const userInfo = useContext(authContext);
  return (
    <div
      className="header"
      style={{ background: '#fff', boxShadow: '0 0 10px -5px rgba(0 0 0 / 50%)' }}
    >
      <Image preview={false} src={logoImg as string} alt="logo" className="logo" />
      <div className="top">
        <div className="notifications">
          <i className="ri-notification-3-line" />
          <div className="notification" />
        </div>
        <div className="info">
          <div className="profile-photo">
            <Image
              src={`https://dummyimage.com/320x320/2f80ed/fff/2076d8&text=${userInfo?.user?.fullName.charAt(0)}`}
              alt="user"
              style={{
                margin: '8px 0',
              }}
            />
          </div>
          <p>
            مرحبًا
            <span
              style={{
                color: '#2f80ed',
                fontWeight: 'bold',
                paddingRight: '4px',
              }}
            >
              {userInfo?.user?.fullName}
            </span>

          </p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
