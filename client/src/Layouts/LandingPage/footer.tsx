import { Col, Row } from 'antd';
import React from 'react';
import { Title } from '../../components';
import './style.css';

const FooterStyle = {
  backgroundColor: '#546681',
  color: 'white',
  padding: '30px 20px',
};

const App: React.FC = () => (
  <div>
    <Row style={FooterStyle}>
      <Col sm={{ span: 24, offset: 0 }} lg={{ span: 6, offset: 2 }}>
        <div>
          <img src="logo" alt="logo" />
          <p>
            Lörem ipsum od ohet dilogi. Bell trabel,
            samuligt, ohöbel utom diska.
            Jinesade bel när feras redorade i belogi.
            FAR paratyp i muvåning, och pesask vyfisat.
            Viktiga poddradio har un mad och inde.
          </p>
          <div>
            <span><i className="facebook" /></span>
            <span><i className="twitter" /></span>
            <span><i className="linkedin" /></span>
            <span><i className="instagram" /></span>
          </div>
        </div>
      </Col>
      <Col sm={{ span: 24, offset: 0 }} lg={{ span: 6, offset: 2 }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
        }}
        >
          <Title
            level={3}
            style={{
              color: 'white',
              fontSize: '1.2rem',
            }}
          >
            الخدمات

          </Title>
          <a className="anchorLink" href="/">
            صفحة 1
          </a>
          <a className="anchorLink" href="/">
            صفحة 1
          </a>
          <a className="anchorLink" href="/">
            صفحة 1
          </a>
          <a className="anchorLink" href="/">
            صفحة 1
          </a>
        </div>
      </Col>
      <Col sm={{ span: 24, offset: 0 }} lg={{ span: 6, offset: 2 }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
        }}
        >
          <Title
            level={3}
            style={{
              color: 'white',
              fontSize: '1.2rem',
            }}
          >
            الخدمات

          </Title>
          <a className="anchorLink" href="/">
            صفحة 1
          </a>
          <a className="anchorLink" href="/">
            صفحة 1
          </a>
          <a className="anchorLink" href="/">
            صفحة 1
          </a>
          <a className="anchorLink" href="/">
            صفحة 1
          </a>
        </div>
      </Col>
    </Row>
  </div>
);

export default App;
