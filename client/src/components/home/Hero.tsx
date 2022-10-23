/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable array-callback-return */
import { Carousel, Button } from 'antd';
import React from 'react';
// import items from '../../StaticData';

// const contentStyle: React.CSSProperties = {
//   height: '100vh',
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79',
// };
const items = [
  {
    key: '1',
    title: 'الدفع عبر الويب والجوال المصمم للمطورين',
    content: 'مفهوم الإعجاب هو أمر مقيت. وظيفته السابقة. مفهوم الإعجاب هو أمر مقيت. وظيفته السابقة. مفهوم الإعجاب هو أمر مقيت. وظيفته السابقة. مفهوم الإعجاب هو أمر مقيت. وظيفته السابقة. مفهوم الإعجاب هو أمر مقيت. وظيفته السابقة. مفهوم الإعجاب هو أمر مقيت. وظيفته السابقة. مفهوم الإعجاب هو أمر مقيت. وظيفته السابقة.',
  },
  {
    key: '2',
    title: 'العمل معًا بشكل أفضل. جدولة الاجتماعات',
    content: 'مفهوم الإعجاب هو أمر مقيت. وظيفته السابقة. مفهوم الإعجاب هو أمر مقيت. وظيفته السابقة. مفهوم الإعجاب هو أمر مقيت. وظيفته السابقة. مفهوم الإعجاب هو أمر مقيت. وظيفته السابقة. مفهوم الإعجاب هو أمر مقيت. وظيفته السابقة. مفهوم الإعجاب هو أمر مقيت. وظيفته السابقة. مفهوم الإعجاب هو أمر مقيت. وظيفته السابقة.',
  },
  {
    key: '3',
    title: 'أفضل تطبيق لزيادة إنتاجيتك',
    content: 'مفهوم الإعجاب هو أمر مقيت. وظيفته السابقة. مفهوم الإعجاب هو أمر مقيت. وظيفته السابقة. مفهوم الإعجاب هو أمر مقيت. وظيفته السابقة. مفهوم الإعجاب هو أمر مقيت. وظيفته السابقة. مفهوم الإعجاب هو أمر مقيت. وظيفته السابقة. مفهوم الإعجاب هو أمر مقيت. وظيفته السابقة. مفهوم الإعجاب هو أمر مقيت. وظيفته السابقة.',
  },
];
const AppHome: React.FC = () => (
  <div id="hero" className="heroBlock">
    <Carousel>
      {items.map((item) => (
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
