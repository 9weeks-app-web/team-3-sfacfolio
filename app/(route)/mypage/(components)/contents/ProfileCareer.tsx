import { JobOfferDummy } from '@/dummy';
import ApplyStatus from '../ApplyStatus';
import { ProfileContentsProps } from './ProfileCommunity';
import JobOfferCard from '@/(route)/main/(components)/Card/JobOfferCard/JobOfferCard';
import Resume from '../Resume/Resume';

export default function ProfileCareer({ currentSubTab }: ProfileContentsProps) {
  return (
    <div className='mt-6'>
      {currentSubTab === '지원 현황' && <ApplyStatus />}
      {currentSubTab === '관심 공고' && (
        <div className='grid grid-cols-3 gap-2'>
          {JobOfferDummy.slice(0, 6).map(jobOffer => (
            <JobOfferCard key={jobOffer.id} {...jobOffer} />
          ))}
        </div>
      )}
      {currentSubTab === '이력서 관리' && <Resume />}
    </div>
  );
}
