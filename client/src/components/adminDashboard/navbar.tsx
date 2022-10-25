import { Layout, Menu } from 'antd';
import logoImg from '../../assets/images/logo.png';
import userImg from '../../assets/images/user-photo.jpg';
import './style.css';

const {
  Header,
} = Layout;

const NavBar: React.FC = () => (
  <Header className="header" style={{ background: '#fff' }}>
    <img src={logoImg as string} alt="logo" className="logo" />
    <div className="top">
      <p>مرحبًا مي</p>
      <div className="profile-photo">
        <img src={userImg as string} alt="user" />
      </div>
    </div>
  </Header>
);

export default NavBar;
