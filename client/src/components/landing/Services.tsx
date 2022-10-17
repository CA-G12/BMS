/* eslint-disable max-len */
import { Timeline, Layout, Image } from 'antd';
import DataStatic from '../../StaticData';
import { Title } from './index';
import './style.css';

const { Content } = Layout;

const Services: React.FC = () => (
  <Layout style={{ backgroundColor: '#fff', margin: '0 115px' }}>
    <Title>خدماتنا</Title>
    <Content
      style={{
        padding: '16px 100px',
      }}
    >
      <div className="services">
        <Timeline mode="right">
          {
              DataStatic.map((x) => (
                <Timeline.Item key={x.id}>{x.content}</Timeline.Item>))
            }
        </Timeline>

        <div className="img">
          <Image
            preview={false}
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
            alt="services"
          />
        </div>
      </div>
    </Content>

  </Layout>
);

export default Services;
