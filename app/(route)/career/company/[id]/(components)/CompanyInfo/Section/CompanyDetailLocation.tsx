'use client';
import { useCallback, useState } from 'react';
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import CompanyDetailSection from './CompanyDetailSection';
import LocationIcon from '@/components/LocationIcon';

interface CompanyLocationType {
  country: string;
  region: string;
  address: string;
  center: { lat: number; lng: number };
}

interface CompanyDetailLocationSectionPropsType {
  id: string;
  location: CompanyLocationType;
}

function CompanyDetailLocationSection({
  id,
  location,
}: CompanyDetailLocationSectionPropsType) {
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY || '';
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey,
  });

  const onLoad = useCallback(function cAllback(map: any) {
    map.setZoom(15);
    setMap(map);
  }, []);

  const onUnmount = useCallback((map: any) => setMap(null), []);

  return (
    <CompanyDetailSection title='근무 하시게 된다면?' id={id}>
      <div className='flex gap-6 py-6 text-lg'>
        <div>
          <span>{location.country}</span> • <span>{location.region}</span>
        </div>
        <div className='flex items-center gap-2'>
          <LocationIcon width={17.5} height={20.5} fill={'#337aff'} />
          <span>{location.address}</span>
        </div>
      </div>
      <div className='w-full h-[338px] bg-background-primary rounded-lg overflow-hidden'>
        {isLoaded && (
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            center={location.center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            <MarkerF key={location.address} position={location.center} />
          </GoogleMap>
        )}
      </div>
    </CompanyDetailSection>
  );
}

export default CompanyDetailLocationSection;
