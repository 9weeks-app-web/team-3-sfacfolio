import CategoryButtonWrap from '@/components/CategoryButtonWrap';
import { profileOfferDummy } from '@/dummy/ProfileOffer';
import ProfileOfferBox from './ProfileOfferBox';

const offerCategories = [
  { title: '제안 전체' },
  { title: '채용 제안' },
  { title: '프로젝트 제안' },
];

export default function ProfileOffer() {
  return (
    <div>
      <CategoryButtonWrap type='button' categories={offerCategories} />

      <div className='mt-9 flex flex-col gap-4'>
        {profileOfferDummy.map((item, i) => (
          <ProfileOfferBox offer={item} key={i} />
        ))}
      </div>
    </div>
  );
}
