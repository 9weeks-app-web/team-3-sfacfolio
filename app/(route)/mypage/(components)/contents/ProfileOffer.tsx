'use client';

import { useState } from 'react';

import CategoryButtonWrap from '@/components/CategoryButtonWrap';
import ProfileOfferBox from './ProfileOfferBox';

import { profileOfferDummy } from '@/dummy/profileOffer';
import ProfileOfferModal from './ProfileOfferModal';
import { ProfileOfferType } from '@/types';

const offerCategories = [
  { title: '제안 전체' },
  { title: '채용 제안' },
  { title: '프로젝트 제안' },
];

export default function ProfileOffer() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedOffer, setSelectedOffer] = useState<ProfileOfferType | null>(
    null,
  );

  const onClose = () => {
    setIsModalOpen(false);
    setSelectedOffer(null);
  };

  return (
    <>
      <CategoryButtonWrap type='button' categories={offerCategories} />

      <div className='mt-9 flex flex-col gap-4'>
        {profileOfferDummy.map((item, i) => (
          <ProfileOfferBox
            offer={item}
            key={i}
            setIsModalOpen={setIsModalOpen}
            setSelectedOffer={setSelectedOffer}
          />
        ))}
      </div>

      {isModalOpen && (
        <ProfileOfferModal offer={selectedOffer} onClose={onClose} />
      )}
    </>
  );
}
