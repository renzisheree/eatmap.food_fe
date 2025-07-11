import InputFieldSet from '@/components/input-fileldset';
import React, { useState } from 'react';
import styled from 'styled-components';
import DropDownSearch from '../components/dropdown-fieldset/index-new';
import Layout from '../components/Layout';
import Pagination from '../components/pagination';

const PageContainer = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 1rem;
`;

const PageSubtitle = styled.p`
  font-size: 1.125rem;
  color: #6b7280;
  max-width: 600px;
  margin: 0 auto;
`;

const FilterSection = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const FilterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 1rem;
`;

const SimpleButton = styled.button`
  background-color: #ea580c;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #dc2626;
  }
  
  &:disabled {
    background-color: #9ca3af;
    cursor: not-allowed;
  }
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FilterLabel = styled.label`
  font-weight: 500;
  color: #374151;
  font-size: 0.875rem;
`;

const RestaurantGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const RestaurantCard = styled.div`
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const RestaurantImage = styled.div`
  height: 200px;
  background: linear-gradient(135deg, #ea580c 0%, #dc2626 100%);
  position: relative;
  
  &::after {
    content: '📷';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3rem;
    opacity: 0.7;
  }
`;

const RestaurantContent = styled.div`
  padding: 1.5rem;
`;

const RestaurantName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
`;

const RestaurantInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: #6b7280;
`;

const RestaurantCuisine = styled.span`
  color: #ea580c;
  font-weight: 500;
`;

const RestaurantRating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  
  span {
    color: #fbbf24;
  }
`;

const RestaurantDescription = styled.p`
  color: #6b7280;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const RestaurantTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  background: #fef3c7;
  color: #92400e;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  font-size: 0.75rem;
  font-weight: 500;
`;

const PaginationWrapper = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;
`;

const ResultsInfo = styled.div`
  text-align: center;
  margin-bottom: 1rem;
  color: #6b7280;
  font-size: 0.875rem;
`;

// Filter options
const priceOptions = [
  { value: '', label: 'Tất cả' },
  { value: '$', label: '$ - Budget Friendly' },
  { value: '$$', label: '$$ - Moderate' },
  { value: '$$$', label: '$$$ - Expensive' },
  { value: '$$$$', label: '$$$$ - Fine Dining' }
];

const ratingOptions = [
  { value: '', label: 'Tất cả đánh giá' },
  { value: '4', label: '4+ Stars' },
  { value: '4.5', label: '4.5+ Stars' },
  { value: '5', label: '5 Stars' }
];

// Extended mock data for pagination testing
const mockRestaurants = [
  {
    id: 1,
    name: "Bella Italia",
    cuisine: "Italian",
    rating: 4.5,
    reviews: 124,
    description: "Authentic Italian cuisine with handmade pasta and wood-fired pizzas in a cozy atmosphere.",
    tags: ["Pizza", "Pasta", "Wine Bar", "Romantic"]
  },
  {
    id: 2,
    name: "Sakura Sushi",
    cuisine: "Japanese",
    rating: 4.8,
    reviews: 89,
    description: "Fresh sushi and traditional Japanese dishes prepared by experienced chefs.",
    tags: ["Sushi", "Ramen", "Fresh Fish", "Traditional"]
  },
  {
    id: 3,
    name: "The Local Burger",
    cuisine: "American",
    rating: 4.2,
    reviews: 203,
    description: "Gourmet burgers made with locally sourced ingredients and craft beer selection.",
    tags: ["Burgers", "Craft Beer", "Local", "Casual"]
  },
  {
    id: 4,
    name: "Spice Garden",
    cuisine: "Indian",
    rating: 4.6,
    reviews: 156,
    description: "Aromatic Indian spices and traditional recipes in a warm, welcoming environment.",
    tags: ["Curry", "Vegetarian", "Spicy", "Traditional"]
  },
  {
    id: 5,
    name: "Le Petit Bistro",
    cuisine: "French",
    rating: 4.7,
    reviews: 78,
    description: "Classic French bistro serving traditional dishes with a modern twist.",
    tags: ["Wine", "Fine Dining", "Romantic", "Classic"]
  },
  {
    id: 6,
    name: "Dragon Palace",
    cuisine: "Chinese",
    rating: 4.3,
    reviews: 167,
    description: "Authentic Chinese cuisine with dim sum, Peking duck, and regional specialties.",
    tags: ["Dim Sum", "Peking Duck", "Family Style", "Traditional"]
  },
  {
    id: 7,
    name: "Taco Libre",
    cuisine: "Mexican",
    rating: 4.4,
    reviews: 192,
    description: "Vibrant Mexican flavors with fresh ingredients and traditional cooking methods.",
    tags: ["Tacos", "Margaritas", "Spicy", "Casual"]
  },
  {
    id: 8,
    name: "Golden Chopsticks",
    cuisine: "Thai",
    rating: 4.6,
    reviews: 145,
    description: "Authentic Thai cuisine with aromatic herbs and spices, from mild to extra spicy.",
    tags: ["Pad Thai", "Curry", "Spicy", "Fresh"]
  },
  {
    id: 9,
    name: "The Steakhouse",
    cuisine: "American",
    rating: 4.8,
    reviews: 267,
    description: "Premium steaks and fine dining experience with excellent wine selection.",
    tags: ["Steaks", "Wine", "Fine Dining", "Luxury"]
  },
  {
    id: 10,
    name: "Mediterranean Breeze",
    cuisine: "Mediterranean",
    rating: 4.5,
    reviews: 134,
    description: "Fresh Mediterranean dishes with olive oil, herbs, and healthy ingredients.",
    tags: ["Healthy", "Fresh", "Olive Oil", "Traditional"]
  },
  {
    id: 11,
    name: "Seoul Kitchen",
    cuisine: "Korean",
    rating: 4.7,
    reviews: 189,
    description: "Authentic Korean BBQ and traditional dishes in a modern setting.",
    tags: ["BBQ", "Kimchi", "Spicy", "Traditional"]
  },
  {
    id: 12,
    name: "Pasta Corner",
    cuisine: "Italian",
    rating: 4.3,
    reviews: 156,
    description: "Homemade pasta and traditional Italian recipes passed down through generations.",
    tags: ["Pasta", "Homemade", "Family", "Traditional"]
  },
  {
    id: 13,
    name: "Ocean's Catch",
    cuisine: "Seafood",
    rating: 4.6,
    reviews: 178,
    description: "Fresh seafood caught daily and prepared with chef's special techniques.",
    tags: ["Seafood", "Fresh", "Daily Catch", "Coastal"]
  },
  {
    id: 14,
    name: "Veggie Paradise",
    cuisine: "Vegetarian",
    rating: 4.4,
    reviews: 123,
    description: "Creative vegetarian dishes that even meat-lovers will enjoy.",
    tags: ["Vegetarian", "Healthy", "Creative", "Fresh"]
  },
  {
    id: 15,
    name: "BBQ Central",
    cuisine: "American",
    rating: 4.5,
    reviews: 234,
    description: "Slow-cooked BBQ with house-made sauces and traditional sides.",
    tags: ["BBQ", "Slow Cooked", "Smoky", "Traditional"]
  }
];

const Restaurants: React.FC = () => {
  const [currentLocation, setCurrentLocation] = useState<string>('');
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  
  // Filter states
  const [selectedPrice, setSelectedPrice] = useState<string>('');
  const [selectedRating, setSelectedRating] = useState<string>('');

  // Calculate pagination
  const totalPages = Math.ceil(mockRestaurants.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentRestaurants = mockRestaurants.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleItemsPerPageChange = (newLimit: number) => {
    setItemsPerPage(newLimit);
    setCurrentPage(1);
  };

  const handlePriceChange = (value: string) => {
    setSelectedPrice(value);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const handleRatingChange = (value: string) => {
    setSelectedRating(value);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const getCurrentLocation = async () => {
    if (!navigator.geolocation) {
      alert('Trình duyệt của bạn không hỗ trợ định vị.');
      return;
    }

    setIsLoadingLocation(true);
    
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          
          const apiKey = process.env.NEXT_PUBLIC_OPENCAGE_API_KEY;
          if (!apiKey) {
            console.warn('OpenCage API key not found');
            const coords = `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`;
            setCurrentLocation(coords);
            alert(`Tọa độ: ${coords}`);
            setIsLoadingLocation(false);
            return;
          }

          const response = await fetch(
            `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}&language=vi&pretty=1`
          );
          
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          
          const data = await response.json();
          
          if (data.results && data.results.length > 0) {
            const location = data.results[0].formatted;
            setCurrentLocation(location);
            alert(`Vị trí hiện tại: ${location}`);
          } else {
            const coords = `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`;
            setCurrentLocation(coords);
            alert(`Không thể lấy địa chỉ. Tọa độ: ${coords}`);
          }
        } catch (error) {
          console.error('Error getting location name:', error);
          const coords = `${position.coords.latitude.toFixed(6)}, ${position.coords.longitude.toFixed(6)}`;
          setCurrentLocation(coords);
          alert(`Lỗi khi lấy địa chỉ. Tọa độ: ${coords}`);
        } finally {
          setIsLoadingLocation(false);
        }
      },
      (error) => {
        console.error('Error getting location:', error);
        setIsLoadingLocation(false);
        
        let errorMessage = 'Không thể lấy vị trí của bạn. ';
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage += 'Vui lòng cho phép truy cập vị trí trong trình duyệt.';
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage += 'Thông tin vị trí không khả dụng.';
            break;
          case error.TIMEOUT:
            errorMessage += 'Yêu cầu lấy vị trí đã hết thời gian.';
            break;
          default:
            errorMessage += 'Đã xảy ra lỗi không xác định.';
            break;
        }
        alert(errorMessage);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 600000 // 10 minutes
      }
    );
  };

  return (
    <Layout title="Restaurants - EatMap Food">
      <PageContainer>
        <PageHeader>
          <PageTitle>Tìm kiếm địa điểm gần bạn</PageTitle>
          <PageSubtitle>
            Dựa trên những đánh giá chính xác và mới nhất
          </PageSubtitle>
        </PageHeader>

        <FilterSection>
          <FilterGrid>
            <FilterGroup>
              <DropDownSearch
                title="Dựa trên giá tiền"
                list={priceOptions}
                value={selectedPrice}
                onChange={handlePriceChange}
                isSearch={false}
              />
            </FilterGroup>
            
            <FilterGroup>
              <DropDownSearch
                title="Dựa vào đánh giá"
                list={ratingOptions}
                value={selectedRating}
                onChange={handleRatingChange}
                isSearch={false}
              />
            </FilterGroup>
            
            <FilterGroup>
              <InputFieldSet 
                type="text" 
                placeholder="Nhập vị trí hoặc sử dụng vị trí hiện tại"
                value={currentLocation}
                onChange={(e) => setCurrentLocation(e.target.value)}
              />
            </FilterGroup>
            
            <FilterGroup>
              <FilterLabel>Hoặc là</FilterLabel>
              <SimpleButton 
                onClick={getCurrentLocation}
                disabled={isLoadingLocation}
              >
                {isLoadingLocation ? 'Đang lấy vị trí...' : 'Dựa vào địa chỉ hiện tại'}
              </SimpleButton>
            </FilterGroup>
          </FilterGrid>
        </FilterSection>

        <ResultsInfo>
          Hiển thị {startIndex + 1} - {Math.min(endIndex, mockRestaurants.length)} trong số {mockRestaurants.length} nhà hàng
        </ResultsInfo>

        <RestaurantGrid>
          {currentRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id}>
              <RestaurantImage />
              <RestaurantContent>
                <RestaurantName>{restaurant.name}</RestaurantName>
                <RestaurantInfo>
                  <RestaurantCuisine>{restaurant.cuisine}</RestaurantCuisine>
                  <RestaurantRating>
                    <span>★</span>
                    <span>{restaurant.rating}</span>
                    <span>({restaurant.reviews} reviews)</span>
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
              </RestaurantContent>
            </RestaurantCard>
          ))}
        </RestaurantGrid>

        <PaginationWrapper>
          <Pagination
            limited={itemsPerPage}
            totalPage={totalPages}
            currentPage={currentPage}
            haveSelectLimit={true}
            onChangePage={handlePageChange}
            onChangeLimited={handleItemsPerPageChange}
          />
        </PaginationWrapper>
      </PageContainer>
    </Layout>
  );
};

export default Restaurants;
