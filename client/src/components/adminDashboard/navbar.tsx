import { Image } from 'antd';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.png';
import userImg from '../../assets/images/user-photo.jpg';
import './style.css';

const NavBar: React.FC = () => (
  <div className="header" style={{ background: '#fff' }}>
    <Link to="/">
      <Image preview={false} src={logoImg as string} alt="logo" className="logo" />
    </Link>
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
