import React, { useEffect, useRef } from 'react';

interface LeafletMapProps {
  address: string;
  restaurantName: string;
}

const LeafletMap: React.FC<LeafletMapProps> = ({ address, restaurantName }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const mapIdRef = useRef<string>(`leaflet-map-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`);
  const isInitializedRef = useRef<boolean>(false);

  useEffect(() => {
    const initMap = async () => {
      if (isInitializedRef.current) return;
      
      const L = await import('leaflet');
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      });

      if (!mapRef.current) return;

      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }

      if (mapRef.current) {
        mapRef.current.innerHTML = '';
      }

      const defaultLocation: [number, number] = [10.8231, 106.6297];

      const map = L.map(mapRef.current).setView(defaultLocation, 15);
      
      // Mark as initialized
      isInitializedRef.current = true;

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      mapInstanceRef.current = map;

      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}&limit=1`
        );
        const data = await response.json();

        if (data && data.length > 0) {
          const lat = parseFloat(data[0].lat);
          const lon = parseFloat(data[0].lon);
          
          map.setView([lat, lon], 16);

          const customIcon = L.divIcon({
            html: `
              <div style="
                background-color: #ea580c;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                border: 3px solid white;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 2px 8px rgba(0,0,0,0.3);
              ">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
            `,
            className: 'custom-marker',
            iconSize: [30, 30],
            iconAnchor: [15, 15]
          });

          // Add marker
          const marker = L.marker([lat, lon], { icon: customIcon }).addTo(map);

          // Add popup
          marker.bindPopup(`
            <div style="padding: 10px; max-width: 200px;">
              <h3 style="margin: 0 0 8px 0; color: #1f2937; font-size: 16px;">${restaurantName}</h3>
              <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px;">${address}</p>
              <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}" 
                 target="_blank" 
                 style="color: #ea580c; text-decoration: none; font-size: 14px;">
                Xem trên Google Maps →
              </a>
            </div>
          `);
        }
      } catch (error) {
        console.error('Geocoding error:', error);
      }
    };

    initMap();

    return () => {
      if (mapInstanceRef.current) {
        try {
          mapInstanceRef.current.remove();
        } catch (error) {
          console.warn('Error removing map:', error);
        }
        mapInstanceRef.current = null;
      }
      if (mapRef.current) {
        mapRef.current.innerHTML = '';
      }
      // Reset initialization flag
      isInitializedRef.current = false;
    };
  }, [address, restaurantName]);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
        integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
        crossOrigin=""
      />
      <div
        ref={mapRef}
        id={mapIdRef.current}
        style={{
          width: '100%',
          height: '400px',
          borderRadius: '8px',
          overflow: 'hidden'
        }}
      />
    </>
  );
};

export default LeafletMap;