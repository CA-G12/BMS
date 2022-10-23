import { FC, ReactNode } from 'react';
import Footer from './footer';
import Header from './header';

type LayoutProps = {
  children: ReactNode[]
};

const Layout: FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
