import { Image } from 'antd';
import logoImg from '../../assets/images/logo.png';
import userImg from '../../assets/images/user-photo.jpg';
import './style.css';

const NavBar: React.FC = () => (
  <div className="header" style={{ background: '#fff' }}>
    <Image preview={false} src={logoImg as string} alt="logo" className="logo" />
    <div className="top">
      <div className="notifications">
        <i className="ri-notification-3-line" />
        <div className="notification" />
      </div>
      <div className="info">
        <div className="profile-photo">
          <Image preview={false} src={userImg as string} alt="user" />
        </div>
        <p>مرحبًا مي</p>
      </div>
    </div>
  </div>
);

export default NavBar;
