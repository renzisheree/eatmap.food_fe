import React, { useEffect } from "react";

// Google Maps type declarations
declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

interface GoogleMapProps {
  address: string;
  restaurantName: string;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ address, restaurantName }) => {
  useEffect(() => {
    const initMap = () => {
      const geocoder = new (window as any).google.maps.Geocoder();
      const mapElement = document.getElementById('restaurant-map');
      
      if (!mapElement) return;

      // Default coordinates for Ho Chi Minh City center
      const defaultLocation = { lat: 10.8231, lng: 106.6297 };
      
      const map = new (window as any).google.maps.Map(mapElement, {
        zoom: 15,
        center: defaultLocation,
        styles: [
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }]
          }
        ]
      });

      // Geocode the address
      geocoder.geocode({ address: address }, (results: any[], status: string) => {
        if (status === 'OK' && results && results[0]) {
          const location = results[0].geometry.location;
          map.setCenter(location);
          
          // Add marker
          const marker = new (window as any).google.maps.Marker({
            position: location,
            map: map,
            title: restaurantName,
            icon: {
              url: 'data:image/svg+xml;base64,' + btoa(`
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="15" fill="#ea580c" stroke="white" stroke-width="3"/>
                  <path d="M20 12L22.5 17H28L23.5 20.5L25.5 26L20 22.5L14.5 26L16.5 20.5L12 17H17.5L20 12Z" fill="white"/>
                </svg>
              `),
              scaledSize: new (window as any).google.maps.Size(40, 40)
            }
          });

          // Add info window
          const infoWindow = new (window as any).google.maps.InfoWindow({
            content: `
              <div style="padding: 10px; max-width: 200px;">
                <h3 style="margin: 0 0 8px 0; color: #1f2937; font-size: 16px;">${restaurantName}</h3>
                <p style="margin: 0; color: #6b7280; font-size: 14px;">${address}</p>
                <div style="margin-top: 8px;">
                  <a href="https://maps.google.com/?q=${encodeURIComponent(address)}" 
                     target="_blank" 
                     style="color: #ea580c; text-decoration: none; font-size: 14px;">
                    Xem trên Google Maps →
                  </a>
                </div>
              </div>
            `
          });

          marker.addListener('click', () => {
            infoWindow.open(map, marker);
          });
        }
      });
    };

    if ((window as any).google && (window as any).google.maps) {
      initMap();
    } else {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLEMAP_API_KEY}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      document.head.appendChild(script);
    }
  }, [address, restaurantName]);

  return (
    <div 
      id="restaurant-map" 
      style={{ 
        width: '100%', 
        height: '400px', 
        borderRadius: '8px', 
        overflow: 'hidden' 
      }}
    />
  );
};

export default GoogleMap;
