import React from 'react';
import Image from 'next/image';
import UserImages from '../PortfoiloCardBody/UserImages';
import IconEye2 from '@images/IconEye2.svg';
import HeartIcon from '@/components/Icons/HeartIcon';

interface PortfolioCardFooterProps {
  workers: {
    id: number;
    name: string;
    userImage: string;
  }[];
  like: number;
  view: number;
}

export default function PortfolioCardFooter({
  workers,
  like,
  view,
}: PortfolioCardFooterProps) {
  return (
    <div className='flex items-center leading-[22px]'>
      <div className='mr-3 flex h-10 w-10 flex-wrap overflow-hidden rounded-full bg-gray-400'>
        <UserImages workers={workers} />
      </div>
      <span className='mr-1 text-label2 font-medium text-text-normal'>
        {workers[0].name}
      </span>
      {workers.length > 1 && (
        <span className='text-text-alternative'>외 {workers.length - 1}명</span>
      )}

      <div className='ml-auto flex items-center gap-[10px] text-label2 text-text-assitive'>
        <div className='flex items-center'>
          <span className='mr-1'>
            <HeartIcon size={20} color='#c4c4c4' />
          </span>
          <span>{like.toLocaleString()}</span>
        </div>
        <div className='flex items-center'>
          <span className='mr-1'>
            <Image src={IconEye2} alt='eye-icon' />
          </span>
          <span>{view.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}
