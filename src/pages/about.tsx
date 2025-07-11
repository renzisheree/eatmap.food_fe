import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const PageContainer = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 4rem 1rem;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 2rem;
  text-align: center;
`;

const ContentSection = styled.section`
  margin-bottom: 3rem;
  
  h2 {
    font-size: 1.875rem;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.125rem;
    line-height: 1.7;
    color: #4b5563;
    margin-bottom: 1rem;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`;

const StatCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  text-align: center;
  border-left: 4px solid #ea580c;
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: #ea580c;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 1rem;
  color: #6b7280;
  font-weight: 500;
`;

const About: React.FC = () => {
  return (
    <Layout title="About Us - EatMap Food">
      <PageContainer>
        <PageTitle>About EatMap Food</PageTitle>
        
        <ContentSection>
          <h2>Our Mission</h2>
          <p>
            At EatMap Food, we believe that great food brings people together. Our mission is to help you 
            discover amazing dining experiences in your area, whether you're looking for a quick bite, 
            a romantic dinner, or a place to celebrate with friends and family.
          </p>
          <p>
            We've built the most comprehensive restaurant discovery platform that combines location-based 
            search, verified reviews, and real-time information to help you make the perfect dining choice 
            every time.
          </p>
        </ContentSection>

        <StatsGrid>
          <StatCard>
            <StatNumber>10,000+</StatNumber>
            <StatLabel>Restaurants Listed</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>500,000+</StatNumber>
            <StatLabel>Verified Reviews</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>50+</StatNumber>
            <StatLabel>Cities Covered</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>1M+</StatNumber>
            <StatLabel>Happy Users</StatLabel>
          </StatCard>
        </StatsGrid>

        <ContentSection>
          <h2>What Makes Us Different</h2>
          <p>
            We don't just list restaurants - we curate experiences. Our team of food enthusiasts and 
            local experts work tirelessly to ensure that every restaurant on our platform meets our 
            high standards for quality, service, and value.
          </p>
          <p>
            Our proprietary verification system ensures that all reviews come from real customers who 
            have actually dined at the restaurants they're reviewing. This means you can trust the 
            ratings and feedback you see on our platform.
          </p>
        </ContentSection>

        <ContentSection>
          <h2>Our Team</h2>
          <p>
            EatMap Food was founded by a team of passionate food lovers and technology experts who saw 
            the need for a better way to discover great restaurants. We combine our love for food with 
            cutting-edge technology to create the ultimate dining discovery experience.
          </p>
          <p>
            Based in the heart of the city, our team includes former restaurant industry professionals, 
            experienced developers, and dedicated customer service representatives who are all committed 
            to helping you find your next favorite meal.
          </p>
        </ContentSection>
      </PageContainer>
    </Layout>
  );
};

export default About;
