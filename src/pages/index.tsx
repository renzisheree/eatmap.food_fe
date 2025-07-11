import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import DropDownSearch from '../components/dropdown-fieldset/index-new';
import Layout from '../components/Layout';
import Pagination1 from '../components/pagination';
import { foodImages } from '../utils/foodImages';

import { Container } from '@/styles/common';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HeroSection = styled.section`
  position: relative;
  height: 70vh;
  min-height: 500px;
  overflow: hidden;
`;

const HeroSlide = styled.div<{ $bgImage: string }>`
  position: relative;
  height: 100%;
  background-image: url(${props => props.$bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.4) 100%
    );
    z-index: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(234, 88, 12, 0.1) 0%,
      transparent 50%,
      rgba(220, 38, 38, 0.1) 100%
    );
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  text-align: center;
  color: white;
  z-index: 2;
  max-width: 800px;
  padding: 0 1rem;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const HeroButton = styled.button`
  background-color: #ea580c;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(234, 88, 12, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    background-color: #dc2626;
    box-shadow: 0 6px 20px rgba(234, 88, 12, 0.4);
  }
`;

const StyledSwiper = styled(Swiper)`
  height: 100%;
  
  .swiper-pagination {
    bottom: 2rem;
  }
  
  .swiper-pagination-bullet {
    background-color: rgba(255, 255, 255, 0.5);
    opacity: 1;
    width: 12px;
    height: 12px;
    margin: 0 6px;
    transition: all 0.3s ease;
    
    &:hover {
      transform: scale(1.2);
    }
  }
  
  .swiper-pagination-bullet-active {
    background-color: #ea580c;
    transform: scale(1.3);
  }
  
  .swiper-slide {
    transition: opacity 0.3s ease;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.8;
  
  span {
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }
  
  svg {
    animation: bounce 2s infinite;
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const RaisingSection = styled.section`
  padding: 4rem 0;
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="25" cy="25" r="2" fill="rgba(234,88,12,0.1)"/><circle cx="75" cy="75" r="1.5" fill="rgba(220,38,38,0.1)"/><circle cx="10" cy="80" r="1" fill="rgba(234,88,12,0.1)"/><circle cx="90" cy="20" r="1.5" fill="rgba(220,38,38,0.1)"/></svg>');
    opacity: 0.6;
    z-index: 1;
  }
`;

const RaisingHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const RaisingTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #1f2937;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ViewAllButton = styled.button`
  background-color: #ea580c;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(234, 88, 12, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    background-color: #dc2626;
    box-shadow: 0 6px 20px rgba(234, 88, 12, 0.4);
  }
`;

const RestaurantSwiper = styled(Swiper)`
  padding: 1rem 0;
  
  .swiper-button-next,
  .swiper-button-prev {
    color: #ea580c;
    background: white;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-top: -20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    
    &:after {
      font-size: 16px;
    }
    
    &:hover {
      transform: scale(1.1);
    }
  }
  
  .swiper-button-disabled {
    opacity: 0.5;
  }
`;

const RestaurantCard = styled.div`
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 100%;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
`;

const RestaurantImage = styled.div<{ cuisine?: string }>`
  height: 200px;
  background: ${({ cuisine }) => {
    switch (cuisine?.toLowerCase()) {
      case 'italian': return 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)';
      case 'japanese': return 'linear-gradient(135deg, #e67e22 0%, #d35400 100%)';
      case 'chinese': return 'linear-gradient(135deg, #f39c12 0%, #e67e22 100%)';
      case 'korean': return 'linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%)';
      case 'thai': return 'linear-gradient(135deg, #27ae60 0%, #229954 100%)';
      case 'vietnamese': return 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)';
      case 'mexican': return 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)';
      case 'indian': return 'linear-gradient(135deg, #f39c12 0%, #e67e22 100%)';
      case 'french': return 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)';
      case 'american': return 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)';
      case 'mediterranean': return 'linear-gradient(135deg, #16a085 0%, #138d75 100%)';
      case 'seafood': return 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)';
      case 'vegetarian': return 'linear-gradient(135deg, #27ae60 0%, #229954 100%)';
      default: return 'linear-gradient(135deg, #ea580c 0%, #dc2626 100%)';
    }
  }};
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '🍽️';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3rem;
    opacity: 0.7;
  }
`;

const RestaurantBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  color: #ea580c;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  z-index: 2;
`;

const RestaurantContent = styled.div`
  padding: 1.5rem;
`;

const RestaurantName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
  line-height: 1.3;
`;

const RestaurantInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
  font-size: 0.875rem;
`;

const RestaurantCuisine = styled.span`
  color: #ea580c;
  font-weight: 500;
  background: rgba(234, 88, 12, 0.1);
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
`;

const RestaurantRating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: #fbbf24;
  font-weight: 500;
  
  span {
    color: #6b7280;
  }
`;

const RestaurantDescription = styled.p`
  color: #6b7280;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const RestaurantTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Tag = styled.span`
  background: #f3f4f6;
  color: #6b7280;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  font-size: 0.75rem;
  font-weight: 500;
`;

const RestaurantFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
`;

const RestaurantDistance = styled.span`
  color: #6b7280;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const RestaurantStatus = styled.span<{ open: boolean }>`
  color: ${props => props.open ? '#10b981' : '#ef4444'};
  font-size: 0.875rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  
  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${props => props.open ? '#10b981' : '#ef4444'};
  }
`;

// New All Restaurants Section
const AllRestaurantsSection = styled.section`
  background: #f9fafb;
  padding: 4rem 0;
`;

const AllRestaurantsContainer = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.p`
  font-size: 1rem;
  color: #6b7280;
  max-width: 500px;
  margin: 0 auto;
`;

const SearchAndFilterBar = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
`;

const SearchFilterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 1rem;
  align-items: end;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const SearchInputWrapper = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border: 2px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #ea580c;
    box-shadow: 0 0 0 3px rgba(234, 88, 12, 0.1);
  }
  
  &::placeholder {
    color: #9ca3af;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #6b7280;
  pointer-events: none;
`;

const ClearFiltersButton = styled.button`
  background-color: #6b7280;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #4b5563;
  }
  
  @media (max-width: 640px) {
    grid-column: 1;
  }
`;

const AllRestaurantGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const AllRestaurantCard = styled.div`
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
`;

const AllRestaurantImage = styled.div<{ $cuisine: string }>`
  height: 200px;
  background: ${({ $cuisine }) => {
    switch ($cuisine.toLowerCase()) {
      case 'italian': return 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)';
      case 'japanese': return 'linear-gradient(135deg, #e67e22 0%, #d35400 100%)';
      case 'chinese': return 'linear-gradient(135deg, #f39c12 0%, #e67e22 100%)';
      case 'korean': return 'linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%)';
      case 'thai': return 'linear-gradient(135deg, #27ae60 0%, #229954 100%)';
      case 'vietnamese': return 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)';
      case 'mexican': return 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)';
      case 'indian': return 'linear-gradient(135deg, #f39c12 0%, #e67e22 100%)';
      case 'french': return 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)';
      case 'american': return 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)';
      case 'mediterranean': return 'linear-gradient(135deg, #16a085 0%, #138d75 100%)';
      case 'seafood': return 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)';
      case 'vegetarian': return 'linear-gradient(135deg, #27ae60 0%, #229954 100%)';
      default: return 'linear-gradient(135deg, #ea580c 0%, #dc2626 100%)';
    }
  }};
  position: relative;
  overflow: hidden;
  
  &::after {
    content: ${({ $cuisine }) => {
      const emoji = (() => {
        switch ($cuisine.toLowerCase()) {
          case 'italian': return '🍝';
          case 'japanese': return '🍣';
          case 'chinese': return '🥟';
          case 'korean': return '🍖';
          case 'thai': return '🌶️';
          case 'vietnamese': return '🍜';
          case 'mexican': return '🌮';
          case 'indian': return '🍛';
          case 'french': return '🥐';
          case 'american': return '🍔';
          case 'mediterranean': return '🫒';
          case 'seafood': return '🦞';
          case 'vegetarian': return '🥗';
          default: return '🍽️';
        }
      })();
      return `"${emoji}"`;
    }};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3rem;
    opacity: 0.8;
  }
`;

const AllRestaurantContent = styled.div`
  padding: 1.5rem;
`;

const AllRestaurantName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
`;

const AllRestaurantInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
  font-size: 0.875rem;
`;

const AllRestaurantCuisine = styled.span`
  background: #fef3c7;
  color: #92400e;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  font-weight: 500;
  font-size: 0.75rem;
`;

const AllRestaurantRating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: #fbbf24;
  font-weight: 500;
  
  .rating-number {
    color: #1f2937;
  }
  
  .reviews {
    color: #6b7280;
    font-size: 0.75rem;
  }
`;

const AllRestaurantDescription = styled.p`
  color: #6b7280;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const AllRestaurantTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const AllRestaurantFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
`;

const AllRestaurantPrice = styled.span`
  color: #ea580c;
  font-weight: 600;
  font-size: 1.125rem;
`;

const ViewDetailsButton = styled.button`
  background-color: #ea580c;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #dc2626;
    transform: translateY(-1px);
  }
`;

const PaginationWrapper = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;
`;

const ResultsInfo = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  color: #6b7280;
  font-size: 0.875rem;
  
  strong {
    color: #1f2937;
  }
`;

const NoResults = styled.div`
  text-align: center;
  padding: 3rem;
  color: #6b7280;
  
  h3 {
    font-size: 1.5rem;
    color: #1f2937;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const FeaturesSection = styled.section`
  padding: 4rem 0;
  background-color: #f9fafb;
`;

const FeaturesContainer = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 1rem;
`;


// Filter options
const cuisineOptions = [
  { value: '', label: 'Tất cả món ăn' },
  { value: 'vietnamese', label: 'Món Việt' },
  { value: 'japanese', label: 'Món Nhật' },
  { value: 'italian', label: 'Món Ý' },
  { value: 'chinese', label: 'Món Trung' },
  { value: 'korean', label: 'Món Hàn' },
  { value: 'thai', label: 'Món Thái' },
  { value: 'french', label: 'Món Pháp' },
  { value: 'american', label: 'Món Mỹ' },
  { value: 'indian', label: 'Món Ấn' },
  { value: 'mexican', label: 'Món Mexico' },
  { value: 'mediterranean', label: 'Món Địa Trung Hải' },
  { value: 'seafood', label: 'Hải sản' },
  { value: 'vegetarian', label: 'Chay' }
];

const priceOptions = [
  { value: '', label: 'Tất cả mức giá' },
  { value: '$', label: '$ - Bình dân (< 100k)' },
  { value: '$$', label: '$$ - Trung bình (100k - 300k)' },
  { value: '$$$', label: '$$$ - Cao cấp (300k - 500k)' },
  { value: '$$$$', label: '$$$$ - Sang trọng (> 500k)' }
];

// Mock data for trending restaurants
const trendingRestaurants = [
  {
    id: 1,
    name: "Quán Phở Hà Nội",
    cuisine: "Quận 12",
    rating: 4.8,
    reviews: 234,
    description: "Phở truyền thống với nước dùng được ninh từ xương trong 12 tiếng",
    tags: ["Phở", "Truyền thống", "Halal"],
    distance: "0.8 km",
    isOpen: true,
    badge: "🔥 Hot"
  },
  {
    id: 2,
    name: "Sushi Hokkaido",
    cuisine: "Quận Vũng Tàu",
    rating: 4.9,
    reviews: 189,
    description: "Sushi tươi ngon với cá hồi nhập khẩu trực tiếp từ Hokkaido",
    tags: ["Sushi", "Cao cấp", "Tươi sống"],
    distance: "1.2 km",
    isOpen: true,
    badge: "⭐ Mới"
  },
  {
    id: 3,
    name: "Pizza Margherita",
    cuisine: "Quận 1",
    rating: 4.7,
    reviews: 156,
    description: "Pizza nướng lò củi chính thống với mozzarella nhập khẩu",
    tags: ["Pizza", "Lò củi", "Authentic"],
    distance: "2.1 km",
    isOpen: false,
    badge: "🍕 Nổi bật"
  },
  {
    id: 4,
    name: "Bánh Mì Sài Gòn",
    cuisine: "Quận Cam",
    rating: 4.6,
    reviews: 298,
    description: "Bánh mì thịt nướng với bánh giòn rụm và nhân đầy đặn",
    tags: ["Bánh mì", "Đường phố", "Giá rẻ"],
    distance: "0.5 km",
    isOpen: true,
    badge: "💰 Tiết kiệm"
  },
  {
    id: 5,
    name: "BBQ Garden",
    cuisine: "Quận 7",
    rating: 4.8,
    reviews: 167,
    description: "Thịt nướng Hàn Quốc với banchan tươi ngon và kimchi tự làm",
    tags: ["BBQ", "Hàn Quốc", "Nhóm bạn"],
    distance: "1.8 km",
    isOpen: true,
    badge: "🥩 Nướng"
  },
  {
    id: 6,
    name: "Dim Sum Palace",
    cuisine: "Quận 3",
    rating: 4.5,
    reviews: 203,
    description: "Dimsum hơi nước với há cảo, siu mai và bánh bao truyền thống",
    tags: ["Dimsum", "Trà chiều", "Gia đình"],
    distance: "2.8 km",
    isOpen: true,
    badge: "🥟 Truyền thống"
  }
];

// All restaurants data
const allRestaurants = [
  {
    id: 1,
    name: "Phở Hà Nội Truyền Thống",
    cuisine: "Vietnamese",
    rating: 4.8,
    reviews: 245,
    price: '$',
    description: "Phở bò truyền thống với nước dùng được ninh từ xương trong 12 tiếng, thịt bò tươi ngon.",
    tags: ["Phở", "Truyền thống", "Halal", "Mở cửa sớm"]
  },
  {
    id: 2,
    name: "Sakura Sushi Premium",
    cuisine: "Japanese",
    rating: 4.9,
    reviews: 189,
    price: '$$$',
    description: "Sushi tươi ngon với cá hồi nhập khẩu trực tiếp từ Hokkaido, không gian sang trọng.",
    tags: ["Sushi", "Cao cấp", "Tươi sống", "Omakase"]
  },
  {
    id: 3,
    name: "Margherita Italiana",
    cuisine: "Italian",
    rating: 4.7,
    reviews: 156,
    price: '$$',
    description: "Pizza nướng lò củi chính thống với mozzarella nhập khẩu và sốt cà chua San Marzano.",
    tags: ["Pizza", "Lò củi", "Authentic", "Pasta"]
  },
  {
    id: 4,
    name: "Dim Sum Garden",
    cuisine: "Chinese",
    rating: 4.6,
    reviews: 234,
    price: '$$',
    description: "Dim sum hơi nước với há cảo, siu mai và bánh bao được làm thủ công hàng ngày.",
    tags: ["Dim Sum", "Trà chiều", "Gia đình", "Handmade"]
  },
  {
    id: 5,
    name: "Seoul BBQ House",
    cuisine: "Korean",
    rating: 4.8,
    reviews: 167,
    price: '$$$',
    description: "Thịt nướng Hàn Quốc premium với banchan tươi ngon và kimchi tự làm.",
    tags: ["BBQ", "Hàn Quốc", "Nhóm bạn", "Premium"]
  },
  {
    id: 6,
    name: "Spicy Thai Kitchen",
    cuisine: "Thai",
    rating: 4.5,
    reviews: 198,
    price: '$',
    description: "Món Thái cay nồng chính thống với pad thai, som tam và curry xanh.",
    tags: ["Pad Thai", "Curry", "Cay", "Authentic"]
  },
  {
    id: 7,
    name: "Le Petit Bistro",
    cuisine: "French",
    rating: 4.7,
    reviews: 78,
    price: '$$$$',
    description: "Ẩm thực Pháp tinh tế với foie gras, escargot và rượu vang cao cấp.",
    tags: ["Fine Dining", "Rượu vang", "Romantic", "Classic"]
  },
  {
    id: 8,
    name: "American Grill House",
    cuisine: "American",
    rating: 4.4,
    reviews: 223,
    price: '$$',
    description: "Burger và steak Mỹ với khoai tây chiên giòn và craft beer.",
    tags: ["Burger", "Steak", "Craft Beer", "Casual"]
  },
  {
    id: 9,
    name: "Taj Mahal Indian",
    cuisine: "Indian",
    rating: 4.6,
    reviews: 156,
    price: '$',
    description: "Cà ri Ấn Độ thơm ngon với naan, biryani và lassi mát lạnh.",
    tags: ["Curry", "Naan", "Vegetarian", "Spicy"]
  },
  {
    id: 10,
    name: "Taco Fiesta",
    cuisine: "Mexican",
    rating: 4.4,
    reviews: 192,
    price: '$',
    description: "Tacos Mexico chính thống với thịt carnitas, guacamole và salsa cay.",
    tags: ["Tacos", "Margaritas", "Spicy", "Casual"]
  },
  {
    id: 11,
    name: "Mediterranean Breeze",
    cuisine: "Mediterranean",
    rating: 4.5,
    reviews: 134,
    price: '$$',
    description: "Món Địa Trung Hải tươi mát với hummus, grilled seafood và olive oil.",
    tags: ["Healthy", "Seafood", "Olive Oil", "Fresh"]
  },
  {
    id: 12,
    name: "Ocean's Fresh Catch",
    cuisine: "Seafood",
    rating: 4.7,
    reviews: 178,
    price: '$$$',
    description: "Hải sản tươi sống được chọn lọc hàng ngày, chế biến theo phong cách Á-Âu.",
    tags: ["Seafood", "Fresh", "Daily Catch", "Premium"]
  }
];

const Home: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [selectedCuisine, setSelectedCuisine] = useState<string>('');
  const [selectedPrice, setSelectedPrice] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter restaurants based on search and filters
  const filteredRestaurants = useMemo(() => {
    return allRestaurants.filter(restaurant => {
      const matchesSearch = searchQuery === '' || 
        restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase()) ||
        restaurant.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        restaurant.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesPrice = selectedPrice === '' || restaurant.price === selectedPrice;
      const matchesCuisine = selectedCuisine === '' || restaurant.cuisine.toLowerCase() === selectedCuisine;
      
      return matchesSearch && matchesPrice && matchesCuisine;
    });
  }, [searchQuery, selectedPrice, selectedCuisine]);

  // Calculate pagination for filtered results
  const totalPages = Math.ceil(filteredRestaurants.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentRestaurants = filteredRestaurants.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: (document.querySelector('#all-restaurants') as HTMLElement)?.offsetTop || 0, behavior: 'smooth' });
  };

  const handleItemsPerPageChange = (newLimit: number) => {
    setItemsPerPage(newLimit);
    setCurrentPage(1);
  };

  const handleCuisineChange = (value: string) => {
    setSelectedCuisine(value);
    setCurrentPage(1);
  };

  const handlePriceChange = (value: string) => {
    setSelectedPrice(value);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedPrice('');
    setSelectedCuisine('');
    setCurrentPage(1);
  };

  return (
    <Layout title="EatMap Food - Find the Best Restaurants Near You">
      <HeroSection>
        <ScrollIndicator>
          <span>Khám phá thêm</span>
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </ScrollIndicator>
        <StyledSwiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            type:"custom",
            clickable: true,
          }}
          loop={true}
          speed={1000}
        >
          {foodImages.map((image, index) => (
            <SwiperSlide key={index}>
              <HeroSlide $bgImage={image.url}>
                <HeroContent>
                  <HeroTitle>{image.title}</HeroTitle>
                  <HeroSubtitle>{image.subtitle}</HeroSubtitle>
                  <HeroButton>
                    Bắt đầu ngay
                  </HeroButton>
                </HeroContent>
              </HeroSlide>
            </SwiperSlide>
          ))}
        </StyledSwiper>
      </HeroSection>

      <RaisingSection>
        <Container>
          <RaisingHeader>
            <RaisingTitle>Những quán nổi gần đây</RaisingTitle>
            <ViewAllButton>
              Xem tất cả
            </ViewAllButton>
          </RaisingHeader>
          
          <RestaurantSwiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {trendingRestaurants.map((restaurant) => (
              <SwiperSlide key={restaurant.id}>
                <RestaurantCard>
                  <RestaurantImage>
                    <RestaurantBadge>{restaurant.badge}</RestaurantBadge>
                  </RestaurantImage>
                  <RestaurantContent>
                    <RestaurantName>{restaurant.name}</RestaurantName>
                    <RestaurantInfo>
                      <RestaurantCuisine>{restaurant.cuisine}</RestaurantCuisine>
                      <RestaurantRating>
                        ⭐ {restaurant.rating} <span>({restaurant.reviews})</span>
                      </RestaurantRating>
                    </RestaurantInfo>
                    <RestaurantDescription>
                      {restaurant.description}
                    </RestaurantDescription>
                    <RestaurantTags>
                      {restaurant.tags.map((tag, index) => (
                        <Tag key={index}>{tag}</Tag>
                      ))}
                    </RestaurantTags>
                    <RestaurantFooter>
                      <RestaurantDistance>
                        📍 {restaurant.distance}
                      </RestaurantDistance>
                      <RestaurantStatus open={restaurant.isOpen}>
                        {restaurant.isOpen ? 'Đang mở' : 'Đã đóng'}
                      </RestaurantStatus>
                    </RestaurantFooter>
                  </RestaurantContent>
                </RestaurantCard>
              </SwiperSlide>
            ))}
          </RestaurantSwiper>
        </Container>
      </RaisingSection>

      <AllRestaurantsSection id="all-restaurants">
        <AllRestaurantsContainer>
          <SectionHeader>
            <SectionTitle>Tất cả nhà hàng</SectionTitle>
            <SectionSubtitle>
              Khám phá đa dạng ẩm thực từ khắp nơi trên thế giới
            </SectionSubtitle>
          </SectionHeader>

          <SearchAndFilterBar>
            <SearchFilterGrid>
              <SearchInputWrapper>
                <SearchIcon>
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </SearchIcon>
                <SearchInput
                  type="text"
                  placeholder="Tìm theo tên nhà hàng, món ăn, hoặc mô tả..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </SearchInputWrapper>
              
              <DropDownSearch
                title="Loại món ăn"
                list={cuisineOptions}
                value={selectedCuisine}
                onChange={handleCuisineChange}
                isSearch={true}
              />
              
              <DropDownSearch
                title="Mức giá"
                list={priceOptions}
                value={selectedPrice}
                onChange={handlePriceChange}
                isSearch={false}
              />
              
              <ClearFiltersButton onClick={clearAllFilters}>
                Xóa bộ lọc
              </ClearFiltersButton>
            </SearchFilterGrid>
          </SearchAndFilterBar>

          <ResultsInfo>
            Hiển thị <strong>{startIndex + 1} - {Math.min(endIndex, filteredRestaurants.length)}</strong> trong số <strong>{filteredRestaurants.length}</strong> nhà hàng
            {(searchQuery || selectedPrice || selectedCuisine) && (
              <span> (đã lọc từ {allRestaurants.length} nhà hàng)</span>
            )}
          </ResultsInfo>

          {filteredRestaurants.length === 0 ? (
            <NoResults>
              <h3>Không tìm thấy nhà hàng</h3>
              <p>Hãy thử điều chỉnh bộ lọc hoặc từ khóa tìm kiếm của bạn</p>
              <ClearFiltersButton onClick={clearAllFilters}>
                Xóa tất cả bộ lọc
              </ClearFiltersButton>
            </NoResults>
          ) : (
            <>
              <AllRestaurantGrid>
                {currentRestaurants.map((restaurant) => (
                  <AllRestaurantCard key={restaurant.id}>
                    <AllRestaurantImage $cuisine={restaurant.cuisine} />
                    <AllRestaurantContent>
                      <AllRestaurantName>{restaurant.name}</AllRestaurantName>
                      <AllRestaurantInfo>
                        <AllRestaurantCuisine>{restaurant.cuisine}</AllRestaurantCuisine>
                        <AllRestaurantRating>
                          ⭐ <span className="rating-number">{restaurant.rating}</span>
                          <span className="reviews">({restaurant.reviews} đánh giá)</span>
                        </AllRestaurantRating>
                      </AllRestaurantInfo>
                      <AllRestaurantDescription>
                        {restaurant.description}
                      </AllRestaurantDescription>
                      <AllRestaurantTags>
                        {restaurant.tags.map((tag, index) => (
                          <Tag key={index}>{tag}</Tag>
                        ))}
                      </AllRestaurantTags>
                      <AllRestaurantFooter>
                        <AllRestaurantPrice>{restaurant.price}</AllRestaurantPrice>
                        <ViewDetailsButton>
                          Xem chi tiết
                        </ViewDetailsButton>
                      </AllRestaurantFooter>
                    </AllRestaurantContent>
                  </AllRestaurantCard>
                ))}
              </AllRestaurantGrid>

              <PaginationWrapper>
                <Pagination1
                  limited={itemsPerPage}
                  totalPage={totalPages}
                  currentPage={currentPage}
                  haveSelectLimit={true}
                  onChangePage={handlePageChange}
                  onChangeLimited={handleItemsPerPageChange}
                />
              </PaginationWrapper>
            </>
          )}
        </AllRestaurantsContainer>
      </AllRestaurantsSection>
            
      <FeaturesSection>
        <FeaturesContainer>
          <SectionTitle>Cảm ơn sự ủng hộ của các bạn, chúc các bạn tìm được quán ăn phù hợp</SectionTitle>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <img 
            src="https://images.unsplash.com/photo-1577303935007-0d306ee638cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
            alt="Thank you greeting" 
            style={{ 
            maxWidth: '100%', 
            height: 'auto', 
            maxHeight: '400px',
            borderRadius: '1rem',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
            }}
          />
            </div>
        </FeaturesContainer>
      </FeaturesSection>
    </Layout>
  );
};

export default Home;