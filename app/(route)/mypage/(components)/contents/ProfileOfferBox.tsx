import Image from 'next/image';
import { ProfileOfferType } from '@/types';
import { Dispatch, SetStateAction } from 'react';

interface ProfileOfferBoxProps {
  offer: ProfileOfferType;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  setSelectedOffer: Dispatch<SetStateAction<ProfileOfferType | null>>;
}

export default function ProfileOfferBox({
  offer,
  setIsModalOpen,
  setSelectedOffer,
}: ProfileOfferBoxProps) {
  const handlerClick = () => {
    setSelectedOffer(offer);
    setIsModalOpen(true);
  };

  return (
    <div className='flex h-[110px] w-full items-center justify-between gap-3 rounded-lg border border-line-normal p-4'>
      <div className='h-[78px] w-[78px] overflow-hidden rounded-lg'>
        <Image
          src={offer.thumbnail}
          alt='offer thumbnail'
          width={0}
          height={0}
          sizes='100%'
          className='h-full w-full object-cover'
        />
      </div>
      <div className='h-full w-[calc(100%-78px-12px)]'>
        <div className='mb-2 flex items-center justify-between'>
          <span className='text-caption2 text-text-alternative'>
            {offer.type}
          </span>
          <button
            className='font-bold text-primary-weak'
            onClick={handlerClick}
          >
            제안결정하기
          </button>
        </div>
        <p className='font-bold text-text-normal'>{offer.title}</p>
        <div className='flex items-center justify-between'>
          <span className='text-caption1 text-text-alternative'>
            {offer.name}
          </span>

          <span className='text-caption2 text-text-alternative'>
            {offer.date}
          </span>
        </div>
      </div>
    </div>
  );
}
