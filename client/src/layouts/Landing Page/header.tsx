import { CSSProperties, FC, useState } from 'react';
import { Carousel, Button } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import PropTypes from 'prop-types';
import headerImage from '../../assets/images/header.png';
import { NavBar } from './navbar';

interface SliderCartProps {
  title: string;
  btnTitle: string;
  Link: string;
}

const SliderCart: React.FC<SliderCartProps> = ({ title, btnTitle, Link }) => {
  const [size, setSize] = useState<SizeType>('large');
  const redirectLink = (link: string): void => {
    console.log(link);
  };

  const cardStyle : CSSProperties = {
    marginTop: '64px',
  };

  return (
    <div style={cardStyle}>
      <h1 style={{
        color: 'white',
      }}
      >
        {title}

      </h1>
      <Button
        style={{
          backgroundColor: '#5138ec',
        }}
        type="primary"
        size={size}
        onClick={() => redirectLink(Link)}
      >
        {btnTitle}
      </Button>
    </div>
  );
};
SliderCart.propTypes = {
  title: PropTypes.string.isRequired,
  btnTitle: PropTypes.string.isRequired,
  Link: PropTypes.string.isRequired,
};

const contentStyle: React.CSSProperties = {
  height: '100vh',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  backgroundImage: `url(${headerImage})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const Slider: FC = () => (
  <div style={{
    backgroundColor: '#000 !important',
  }}
  >
    <NavBar selectedPage="Home" />
    <Carousel
      autoplay
    >
      <div>
        <div style={contentStyle} className="sliderImage">
          <SliderCart
            title="تصميم نظام إدارة المباني"
            btnTitle="قراءة المزيد"
            Link="google.com"
          />
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <SliderCart
            title="تصميم نظام إدارة المباني"
            btnTitle="قراءة المزيد"
            Link="google.com"
          />
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <SliderCart
            title="تصميم نظام إدارة المباني"
            btnTitle="قراءة المزيد"
            Link="google.com"
          />
        </div>
      </div>
    </Carousel>
  </div>
);
const Header: FC = () => (
  <Slider />
);

export default Header;
