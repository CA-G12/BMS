import { Carousel, Button } from 'antd';
import staticData from '../../StaticData';

const AppHome: React.FC = () => (
  <div id="home" className="heroBlock">
    <div className="overlay">
      <Carousel>
        {staticData.items.map((item: { key: number; title: string; content: string }) => (
          <div key={item.key} className="container-fluid">
            <div className="content">
              <h3>{item.title}</h3>
              <p>{item.content}</p>
              <div className="btnHolder">
                <Button type="primary" size="large" id="about-us">المزيد عنا</Button>
                <a href="#video">
                  <Button size="large" id="video">
                    <i className="ri-slideshow-3-line" />
                    شاهدنا
                  </Button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  </div>
);

export default AppHome;
