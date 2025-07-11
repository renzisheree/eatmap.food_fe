import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import GoogleMap from '../../utils/google.map';
import LeafletMap from '@/utils/leafmap';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import PulseLoader from '@/components/loading/pulse-loader';



const PageContainer = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const BreadcrumbNav = styled.nav`
  margin-bottom: 2rem;
  font-size: 0.875rem;
  color: #6b7280;
  
  a {
    color: #ea580c;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  span {
    margin: 0 0.5rem;
  }
`;

const RestaurantHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const RestaurantInfo = styled.div`
  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #1f2937;
    margin-bottom: 1rem;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

const RestaurantMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  align-items: center;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #fef3c7;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  
  .stars {
    color: #fbbf24;
    font-size: 1.125rem;
  }
  
  .rating-number {
    font-weight: 600;
    color: #1f2937;
  }
  
  .reviews {
    color: #6b7280;
    font-size: 0.875rem;
  }
`;

const PriceRange = styled.div`
  background: #dcfce7;
  color: #166534;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 600;
`;

const CuisineType = styled.div`
  background: #e0e7ff;
  color: #3730a3;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
`;

const Status = styled.div<{ isOpen: boolean }>`
  background: ${props => props.isOpen ? '#dcfce7' : '#fee2e2'};
  color: ${props => props.isOpen ? '#166534' : '#dc2626'};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${props => props.isOpen ? '#10b981' : '#ef4444'};
  }
`;

const RestaurantDescription = styled.p`
  color: #6b7280;
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const TagsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Tag = styled.span`
  background: #f3f4f6;
  color: #6b7280;
  padding: 0.375rem 0.75rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  .contact-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: #6b7280;
    
    svg {
      color: #ea580c;
      flex-shrink: 0;
    }
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const PrimaryButton = styled.button`
  background-color: #ea580c;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #dc2626;
    transform: translateY(-2px);
  }
`;

const SecondaryButton = styled.button`
  background-color: white;
  color: #6b7280;
  padding: 0.75rem 1.5rem;
  border: 2px solid #e5e7eb;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #ea580c;
    color: #ea580c;
  }
`;

const RestaurantSidebar = styled.div`
  .hours-card, .contact-card {
    background: white;
    padding: 1.5rem;
    border-radius: 0.75rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    margin-bottom: 1.5rem;
    
    h3 {
      font-size: 1.125rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 1rem;
    }
  }
`;

const HoursList = styled.div`
  .hour-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
    border-bottom: 1px solid #f3f4f6;
    
    &:last-child {
      border-bottom: none;
    }
    
    &.today {
      background: #fef3c7;
      margin: 0 -0.5rem;
      padding: 0.5rem;
      border-radius: 0.375rem;
      font-weight: 600;
    }
  }
  
  .day {
    color: #6b7280;
  }
  
  .time {
    color: #1f2937;
    font-weight: 500;
  }
`;

const ContentSection = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const MainContent = styled.div`
  .section {
    background: white;
    padding: 2rem;
    border-radius: 0.75rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
    
    h2 {
      font-size: 1.5rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 1.5rem;
    }
  }
`;

const ImageGallery = styled.div`
  margin-bottom: 2rem;
  
  .swiper {
    border-radius: 0.75rem;
    overflow: hidden;
  }
  
  .swiper-slide img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
  
  .swiper-button-next,
  .swiper-button-prev {
    color: #ea580c;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    
    &:after {
      font-size: 16px;
    }
  }
  
  .swiper-pagination-bullet {
    background: #ea580c;
    opacity: 0.5;
    
    &.swiper-pagination-bullet-active {
      opacity: 1;
    }
  }
`;

const MenuSection = styled.div`
  .menu-category {
    margin-bottom: 2rem;
    
    h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 1rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid #ea580c;
    }
  }
  
  .menu-item {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 1rem 0;
    border-bottom: 1px solid #f3f4f6;
    
    &:last-child {
      border-bottom: none;
    }
  }
  
  .item-info {
    flex: 1;
    
    h4 {
      font-size: 1rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 0.25rem;
    }
    
    p {
      color: #6b7280;
      font-size: 0.875rem;
      line-height: 1.4;
    }
  }
  
  .item-price {
    font-size: 1.125rem;
    font-weight: 600;
    color: #ea580c;
    margin-left: 1rem;
  }
`;

const ReviewsSection = styled.div`
  .review-item {
    padding: 1.5rem 0;
    border-bottom: 1px solid #f3f4f6;
    
    &:last-child {
      border-bottom: none;
    }
  }
  
  .review-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;
  }
  
  .reviewer-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    
    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: #ea580c;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
    }
    
    .name {
      font-weight: 600;
      color: #1f2937;
    }
  }
  
  .review-rating {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    color: #fbbf24;
    font-size: 0.875rem;
  }
  
  .review-text {
    color: #6b7280;
    line-height: 1.6;
  }
`;

const MapSection = styled.div`
  .address-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: #6b7280;
    margin-top: 1rem;
    
    svg {
      color: #ea580c;
      flex-shrink: 0;
    }
  }
`;

// Updated mock data with better coordinates
const mockRestaurantData: Record<string, any> = {
  "1": {
    id: 1,
    name: "Phở Hà Nội Truyền Thống",
    rating: 4.8,
    reviewCount: 245,
    price: '$',
    cuisine: 'Phở',
    isOpen: true,
    description: "Phở bò truyền thống với nước dùng được ninh từ xương trong 12 tiếng, thịt bò tươi ngon. Không gian ấm cúng, phục vụ tận tình, là điểm đến lý tưởng cho những ai muốn thưởng thức hương vị phở Hà Nội đích thực.",
    tags: ["Phở", "Truyền thống", "Halal", "Mở cửa sớm", "Gia đình"],
    phone: "+84 28 1234 5678",
    address: "123 Đường Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh",
    website: "www.pho-hanoi.com",
    coordinates: { lat: 10.8231, lng: 106.6297 }, // Nguyen Hue Street coordinates
    hours: {
      monday: "6:00 AM - 10:00 PM",
      tuesday: "6:00 AM - 10:00 PM", 
      wednesday: "6:00 AM - 10:00 PM",
      thursday: "6:00 AM - 10:00 PM",
      friday: "6:00 AM - 11:00 PM",
      saturday: "6:00 AM - 11:00 PM",
      sunday: "6:00 AM - 10:00 PM"
    },
    images: [
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1576867757603-05b134ebc379?w=800&h=600&fit=crop"
    ],
    menu: [
      {
        category: "Phở",
        items: [
          { name: "Phở Bò Tái", description: "Phở bò với thịt tái mỏng, nước dùng thơm ngon", price: "65,000đ" },
          { name: "Phở Bò Chín", description: "Phở bò với thịt chín, phù hợp mọi lứa tuổi", price: "65,000đ" },
          { name: "Phở Bò Tái Chín", description: "Phở bò kết hợp thịt tái và chín", price: "70,000đ" },
          { name: "Phở Đặc Biệt", description: "Phở với đầy đủ loại thịt và nội tạng", price: "75,000đ" }
        ]
      },
      {
        category: "Thức uống",
        items: [
          { name: "Cà phê đen", description: "Cà phê phin truyền thống", price: "15,000đ" },
          { name: "Cà phê sữa", description: "Cà phê phin với sữa đặc", price: "18,000đ" },
          { name: "Nước chanh", description: "Nước chanh tươi mát", price: "12,000đ" }
        ]
      }
    ],
    reviews: [
      {
        id: 1,
        name: "Minh Anh",
        rating: 5,
        text: "Phở ngon tuyệt vời! Nước dùng đậm đà, thịt bò tươi ngon. Nhân viên phục vụ rất tận tình. Sẽ quay lại lần nữa!",
        date: "2 ngày trước"
      },
      {
        id: 2,
        name: "Thành Đạt",
        rating: 4,
        text: "Phở khá ngon, không gian sạch sẽ. Giá cả hợp lý. Chỉ có điều hơi đông người vào giờ cao điểm.",
        date: "1 tuần trước"
      },
      {
        id: 3,
        name: "Lan Hương",
        rating: 5,
        text: "Quán phở truyền thống rất đáng thử. Hương vị đậm đà, chính thống. Thịt bò tươi ngon, bánh phở dai vừa phải.",
        date: "2 tuần trước"
      }
    ]
  },
  "2": {
    id: 2,
    name: "Sakura Sushi Premium",
    rating: 4.9,
    reviewCount: 189,
    price: '$$$',
    cuisine: 'Sushi',
    isOpen: true,
    description: "Sushi tươi ngon với cá hồi nhập khẩu trực tiếp từ Hokkaido, không gian sang trọng. Đầu bếp Nhật Bản có nhiều năm kinh nghiệm sẽ mang đến cho bạn trải nghiệm ẩm thực Nhật Bản đích thực.",
    tags: ["Sushi", "Cao cấp", "Tươi sống", "Omakase", "Nhật Bản"],
    phone: "+84 28 2345 6789",
    address: "456 Đường Lê Lợi, Quận 1, TP. Hồ Chí Minh",
    website: "www.sakura-sushi.com",
    coordinates: { lat: 10.8230, lng: 106.6295 }, // Le Loi Street coordinates
    hours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM", 
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 10:00 PM"
    },
    images: [
      "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?w=800&h=600&fit=crop"
    ],
    menu: [
      {
        category: "Sushi",
        items: [
          { name: "Salmon Sashimi", description: "Cá hồi tươi từ Hokkaido", price: "280,000đ" },
          { name: "Tuna Sashimi", description: "Cá ngừ tươi cao cấp", price: "320,000đ" },
          { name: "Omakase Set", description: "Set sushi do chef lựa chọn", price: "850,000đ" }
        ]
      },
      {
        category: "Thức uống",
        items: [
          { name: "Sake Premium", description: "Sake cao cấp từ Nhật Bản", price: "150,000đ" },
          { name: "Trà xanh", description: "Trà xanh truyền thống", price: "25,000đ" }
        ]
      }
    ],
    reviews: [
      {
        id: 1,
        name: "Hoàng Nam",
        rating: 5,
        text: "Sushi tuyệt vời! Cá tươi ngon, chef rất skilled. Giá hơi cao nhưng xứng đáng.",
        date: "3 ngày trước"
      },
      {
        id: 2,
        name: "Mai Linh",
        rating: 4,
        text: "Không gian sang trọng, phục vụ tốt. Omakase set rất đáng thử!",
        date: "1 tuần trước"
      }
    ]
  }
};

const DetailPage = () => {
  const router = useRouter();
  const { detail } = router.query;
  const [restaurant, setRestaurant] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (detail) {
      setTimeout(() => {
        const restaurantData = mockRestaurantData[detail as string];
        setRestaurant(restaurantData || null);
        setLoading(false);
      }, 500);
    }
  }, [detail]);

  if (loading) {
    return (
      <Layout title="Loading... - EatMap Food">
        <PageContainer>
          <div style={{ textAlign: 'center', padding: '4rem 0' }}>
            <PulseLoader loading></PulseLoader>
          </div>
        </PageContainer>
      </Layout>
    );
  }

  if (!restaurant) {
    return (
      <Layout title="Restaurant Not Found - EatMap Food">
        <PageContainer>
          <div style={{ textAlign: 'center', padding: '4rem 0' }}>
            <h1 style={{ fontSize: '2rem', color: '#1f2937', marginBottom: '1rem' }}>
              Không tìm thấy nhà hàng
            </h1>
            <p style={{ color: '#6b7280', marginBottom: '2rem' }}>
              Nhà hàng bạn đang tìm không tồn tại hoặc đã bị xóa.
            </p>
            <PrimaryButton onClick={() => router.push('/')}>
              Về trang chủ
            </PrimaryButton>
          </div>
        </PageContainer>
      </Layout>
    );
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} style={{ color: index < Math.floor(rating) ? '#fbbf24' : '#e5e7eb' }}>
        ★
      </span>
    ));
  };

  const getDayName = (day: string) => {
    const dayNames: Record<string, string> = {
      monday: 'Thứ Hai',
      tuesday: 'Thứ Ba',
      wednesday: 'Thứ Tư',
      thursday: 'Thứ Năm',
      friday: 'Thứ Sáu',
      saturday: 'Thứ Bảy',
      sunday: 'Chủ Nhật'
    };
    return dayNames[day] || day;
  };

  return (
    <Layout title={`${restaurant.name} - EatMap Food`}>
      <PageContainer>
        <BreadcrumbNav>
          <a href="/">Trang chủ</a>
          <span>/</span>
          <a href="/restaurants">Nhà hàng</a>
          <span>/</span>
          <span>{restaurant.name}</span>
        </BreadcrumbNav>

        <RestaurantHeader>
          <RestaurantInfo>
            <h1>{restaurant.name}</h1>
            <RestaurantMeta>
              <Rating>
                <span className="stars">★★★★★</span>
                <span className="reviews">({restaurant.reviewCount} đánh giá)</span>
              </Rating>
              <PriceRange>{restaurant.price}</PriceRange>
              <CuisineType>{restaurant.cuisine}</CuisineType>
              <Status isOpen={restaurant.isOpen}>
                {restaurant.isOpen ? 'Đang mở cửa' : 'Đã đóng cửa'}
              </Status>
            </RestaurantMeta>
            <RestaurantDescription>{restaurant.description}</RestaurantDescription>
            <TagsList>
              {restaurant.tags.map((tag: string, index: number) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </TagsList>
            <ActionButtons>
              <PrimaryButton>Đặt bàn ngay</PrimaryButton>
              <SecondaryButton onClick={() => window.open(`tel:${restaurant.phone}`)}>
                Gọi điện
              </SecondaryButton>
              <SecondaryButton onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(restaurant.address)}`)}>
                Chỉ đường
              </SecondaryButton>
            </ActionButtons>
          </RestaurantInfo>

          <RestaurantSidebar>
            <div className="hours-card">
              <h3>Giờ mở cửa</h3>
              <HoursList>
                {Object.entries(restaurant.hours).map(([day, time]) => {
                  const isToday = new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase() === day;
                  return (
                    <div key={day} className={`hour-item ${isToday ? 'today' : ''}`}>
                      <span className="day">{getDayName(day)}</span>
                      <span className="time">{time as string}</span>
                    </div>
                  );
                })}
              </HoursList>
            </div>

            <div className="contact-card">
              <h3>Thông tin liên hệ</h3>
              <ContactInfo>
                <div className="contact-item">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>{restaurant.phone}</span>
                </div>
                <div className="contact-item">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{restaurant.address}</span>
                </div>
                <div className="contact-item">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <span>{restaurant.website}</span>
                </div>
              </ContactInfo>
            </div>
          </RestaurantSidebar>
        </RestaurantHeader>

        <ImageGallery>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop
            spaceBetween={10}
            slidesPerView={1}
          >
            {restaurant.images.map((image: string, index: number) => (
              <SwiperSlide key={index}>
                <img src={image} alt={`${restaurant.name} - Hình ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </ImageGallery>

        <ContentSection>
          <MainContent>
            <div className="section">
              <h2>Thực đơn</h2>
              <MenuSection>
                {restaurant.menu.map((category: any, index: number) => (
                  <div key={index} className="menu-category">
                    <h3>{category.category}</h3>
                    {category.items.map((item: any, itemIndex: number) => (
                      <div key={itemIndex} className="menu-item">
                        <div className="item-info">
                          <h4>{item.name}</h4>
                          <p>{item.description}</p>
                        </div>
                        <div className="item-price">{item.price}</div>
                      </div>
                    ))}
                  </div>
                ))}
              </MenuSection>
            </div>

            <div className="section">
              <h2>Đánh giá từ khách hàng</h2>
              <ReviewsSection>
                {restaurant.reviews.map((review: any) => (
                  <div key={review.id} className="review-item">
                    <div className="review-header">
                      <div className="reviewer-info">
                        <div className="avatar">
                          {review.name.charAt(0)}
                        </div>
                        <div>
                          <div className="name">{review.name}</div>
                          <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>{review.date}</div>
                        </div>
                      </div>
                      <div className="review-rating">
                        {renderStars(review.rating)}
                      </div>
                    </div>
                    <p className="review-text">{review.text}</p>
                  </div>
                ))}
              </ReviewsSection>
            </div>
          </MainContent>

          <div>
            <div className="section">
              <h2>Vị trí</h2>
              <MapSection>
                <LeafletMap 
                  address={restaurant.address}
                  restaurantName={restaurant.name}
                />
                <div className="address-info">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{restaurant.address}</span>
                </div>
              </MapSection>
            </div>
          </div>
        </ContentSection>
      </PageContainer>
    </Layout>
  );
};

export default DetailPage;