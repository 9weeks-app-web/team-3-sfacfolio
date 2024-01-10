import React from 'react';
import Image from 'next/image';
import UserImages from '../PortfoiloCardBody/UserImages';
import IconEye2 from '@images/IconEye2.svg';
import HeartIcon from '@/components/Icons/HeartIcon';

export default function PortfolioCardFooter({
  참여인원,
}: {
  참여인원: number;
}) {
  return (
    <div className='flex items-center leading-[22px]'>
      <div className='mr-3 flex h-10 w-10 flex-wrap overflow-hidden rounded-full bg-gray-400'>
        <UserImages 참여인원={참여인원} />
      </div>
      <span className='mr-1 text-label2 font-medium text-text-normal'>
        김다인하늘
      </span>
      {참여인원 > 1 && (
        <span className='text-text-alternative'>외 {참여인원 - 1}명</span>
      )}

      <div className='ml-auto flex items-center gap-[10px] text-label2 text-text-assitive'>
        <div className='flex items-center'>
          <span className='mr-1'>
            <HeartIcon size={20} color='#c4c4c4' />
          </span>
          <span>2,132</span>
        </div>
        <div className='flex items-center'>
          <span className='mr-1'>
            <Image src={IconEye2} alt='eye-icon' />
          </span>
          <span>2,132</span>
        </div>
      </div>
    </div>
  );
}
