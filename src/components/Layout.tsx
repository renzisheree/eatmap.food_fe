import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Header from './header/index';
import Footer from './footer/index';

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = 'EatMap Food - Find the Best Restaurants',
  description = 'Discover amazing restaurants in your area with EatMap Food.'
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <LayoutContainer>
        <Header />
        <MainContent>
          {children}
        </MainContent>
        <Footer />
      </LayoutContainer>
    </>
  );
};

export default Layout;
