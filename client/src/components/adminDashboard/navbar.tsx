/* eslint-disable jsx-a11y/img-redundant-alt */
import { Layout } from 'antd';
import logoImg from '../../assets/images/logo.png';
import userImg from '../../assets/images/user-photo.jpg';
import './style.css';

const {
  Header,
} = Layout;

const NavBar: React.FC = () => (
  <Header className="header" style={{ background: '#fff' }}>
    <img src={logoImg as string} alt="logo" className="logo" />
    <h1>
      aaaa
    </h1>
    <div className="top">
      <div className="notofications">
        <i className="ri-notification-3-line" />
        <span className="notefication" />
      </div>
      <div className="profile">
        <div className="info">
          <p>
            Hey,
            {' '}
            <b>Mai</b>
          </p>
          <small className="text-muted">Admin</small>
        </div>
        <div className="profile-photo">
          <img src={userImg as string} alt="photo-user" />
        </div>
      </div>

    </div>

  </Header>
);

export default NavBar;
