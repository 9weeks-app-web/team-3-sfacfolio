import CompanyDetailSection from './CompanyDetailSection';
import LocationIcon from '@/components/LocationIcon';

interface CompanyLocationType {
  country: string;
  region: string;
  address: string;
}

interface CompanyDetailLocationSectionPropsType {
  id: string;
  location: CompanyLocationType;
}

function CompanyDetailLocationSection({
  id,
  location,
}: CompanyDetailLocationSectionPropsType) {
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
      <div className='w-full h-[338px] bg-background-primary rounded-lg'></div>
    </CompanyDetailSection>
  );
}

export default CompanyDetailLocationSection;
