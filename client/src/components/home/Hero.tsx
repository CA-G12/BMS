import { Carousel, Button } from 'antd';
import React from 'react';
import staticData from '../../StaticData';

const AppHome: React.FC = () => (
  <div id="hero" className="heroBlock">
    <Carousel>
      {staticData.items.map((item: { key: number; title: string; content: string }) => (
        <div key={item.key} className="container-fluid">
          <div className="content">
            <h3>{item.title}</h3>
            <p>{item.content}</p>
            <div className="btnHolder">
              <Button type="primary" size="large">المزيد عنا</Button>
              <Button size="large">
                <i className="ri-slideshow-3-line" />
                {' '}
                شاهدنا
              </Button>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  </div>
);

export default AppHome;
