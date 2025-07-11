import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #1f2937;
  color: #f9fafb;
  padding: 3rem 0 1rem;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const FooterMain = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    color: #ea580c;
    margin-bottom: 1rem;
  }
`;

const FooterLink = styled.span`
  display: block;
  color: #d1d5db;
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
  cursor: pointer;
  
  &:hover {
    color: #ea580c;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  color: #d1d5db;
  transition: color 0.3s ease;
  
  &:hover {
    color: #ea580c;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #374151;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Copyright = styled.p`
  color: #9ca3af;
  font-size: 0.875rem;
  margin: 0;
`;

const FooterNavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const FooterNavLink = styled.span`
  color: #9ca3af;
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.3s ease;
  cursor: pointer;
  
  &:hover {
    color: #ea580c;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterMain>
          <FooterSection>
            <h3>EatMap Food</h3>
            <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
              Discover the best restaurants in your area. From fine dining to casual eats, 
              we help you find the perfect place for every occasion.
            </p>
            <SocialLinks>
              <SocialLink href="#" aria-label="Facebook">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </SocialLink>
              <SocialLink href="#" aria-label="Twitter">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </SocialLink>
              <SocialLink href="#" aria-label="Instagram">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986 6.618 0 11.986-5.368 11.986-11.986C24.003 5.367 18.635.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.73-3.016-1.804C4.851 14.539 4.54 13.755 4.54 12.988c0-2.137 1.736-3.871 3.871-3.871s3.871 1.734 3.871 3.871c0 2.136-1.734 3.871-3.871 3.871z"/>
                </svg>
              </SocialLink>
            </SocialLinks>
          </FooterSection>

          <FooterSection>
            <h3>Quick Links</h3>
            <Link href="/">
              <FooterLink>Home</FooterLink>
            </Link>
            <Link href="/restaurants">
              <FooterLink>Find Restaurants</FooterLink>
            </Link>
            <Link href="/cuisines">
              <FooterLink>Browse Cuisines</FooterLink>
            </Link>
            <Link href="/reviews">
              <FooterLink>Customer Reviews</FooterLink>
            </Link>
            <Link href="/blog">
              <FooterLink>Food Blog</FooterLink>
            </Link>
          </FooterSection>

          <FooterSection>
            <h3>Support</h3>
            <Link href="/help">
              <FooterLink>Help Center</FooterLink>
            </Link>
            <Link href="/contact">
              <FooterLink>Contact Us</FooterLink>
            </Link>
            <Link href="/faq">
              <FooterLink>FAQ</FooterLink>
            </Link>
            <Link href="/feedback">
              <FooterLink>Send Feedback</FooterLink>
            </Link>
            <Link href="/report">
              <FooterLink>Report an Issue</FooterLink>
            </Link>
          </FooterSection>

          <FooterSection>
            <h3>For Restaurants</h3>
            <Link href="/business">
              <FooterLink>List Your Restaurant</FooterLink>
            </Link>
            <Link href="/business/login">
              <FooterLink>Business Login</FooterLink>
            </Link>
            <Link href="/advertise">
              <FooterLink>Advertise With Us</FooterLink>
            </Link>
            <Link href="/analytics">
              <FooterLink>Business Analytics</FooterLink>
            </Link>
          </FooterSection>
        </FooterMain>

        <FooterBottom>
          <Copyright>
            © 2025 EatMap Food. All rights reserved.
          </Copyright>
          <FooterNavLinks>
            <Link href="/privacy">
              <FooterNavLink>Privacy Policy</FooterNavLink>
            </Link>
            <Link href="/terms">
              <FooterNavLink>Terms of Service</FooterNavLink>
            </Link>
            <Link href="/cookies">
              <FooterNavLink>Cookie Policy</FooterNavLink>
            </Link>
          </FooterNavLinks>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
