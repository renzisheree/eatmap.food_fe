import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { ButtonPrimary } from '@/styles/buttons';

const HeaderContainer = styled.header`
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #e2e8f0;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const HeaderContent = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    
    a {
        font-size: 1.5rem;
        font-weight: bold;
        text-decoration: none;
        position: relative;
        background: linear-gradient(
            45deg,
            #ea580c 0%,
            #f97316 20%,
            #fbbf24 40%,
            #fde047 60%,
            #f97316 80%,
            #ea580c 100%
        );
        background-size: 300% 300%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: shine 6s ease-in-out infinite;
        filter: drop-shadow(0 0 8px rgba(234, 88, 12, 0.3));
        
        &:hover {
            animation-duration: 3s;
            filter: drop-shadow(0 0 12px rgba(234, 88, 12, 0.5));
            transform: scale(1.05);
        }
        
        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
                90deg,
                transparent 0%,
                rgba(255, 255, 255, 0.4) 50%,
                transparent 100%
            );
            animation: shimmer 4s infinite;
            z-index: 1;
        }
    }
    
    @keyframes shine {
        0%, 100% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
    }
    
    @keyframes shimmer {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(100%);
        }
    }
`;

const Navigation = styled.nav`
  display: none;
  
  @media (min-width: 768px) {
    display: flex;
    gap: 2rem;
  }
`;

const NavLink = styled.span`
  color: #4b5563;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  cursor: pointer;
  
  &:hover {
    color: #ea580c;
  }
`;

const SearchContainer = styled.div`
  display: none;
  position: relative;
  
  @media (min-width: 768px) {
    display: block;
  }
`;

const SearchInput = styled.input`
  width: 16rem;
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #ea580c;
    box-shadow: 0 0 0 2px rgba(234, 88, 12, 0.1);
  }
  
  &::placeholder {
    color: #9ca3af;
  }
`;

const SearchButton = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #9ca3af;
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color: #ea580c;
  }
`;

const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;


const MobileMenuButton = styled.button`
  display: block;
  background: none;
  border: none;
  color: #4b5563;
  cursor: pointer;
  
  @media (min-width: 768px) {
    display: none;
  }
  
  &:hover {
    color: #ea580c;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>
          <Link href="/">
            EatMap
          </Link>
        </Logo>

        <Navigation>
          <Link href="/">
            <NavLink>Trang chủ</NavLink>
          </Link>
          <Link href="/restaurants">
            <NavLink>Địa điểm ăn uống</NavLink>
          </Link>
          <Link href="/about">
            <NavLink>Về chúng tôi</NavLink>
          </Link>
          <Link href="/contact">
            <NavLink>Liên hệ</NavLink>
          </Link>
        </Navigation>

        <ActionsContainer>
          <SearchContainer>
            <SearchInput 
              type="text" 
              placeholder="Tìm kiếm món ăn..."
            />
            <SearchButton>
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </SearchButton>
          </SearchContainer>
          <ButtonPrimary onClick={() => {window.location.href='/login'}}>Đăng nhập</ButtonPrimary>
          

          <MobileMenuButton>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </MobileMenuButton>
        </ActionsContainer>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
