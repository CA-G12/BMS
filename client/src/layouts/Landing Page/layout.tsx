import React, { FC, Fragment, ReactNode } from 'react';
import Footer from './footer';
import Header from './header';

type LayoutProps = {
  Children: React.ReactNode[]
};

const Layout: FC<LayoutProps> = ({ Children }) => (
  <>
    <Header />
    {Children}
    <Footer />
  </>
);

export default Layout;
