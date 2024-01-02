import React from 'react';
import UserImages from '../PortfoiloCardBody/UserImages';
import IconHeart from '@images/IconHeart.svg';
import IconEye from '@images/IconEye.svg';
import Image from 'next/image';

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
        <span className='text-label3 font-medium text-text-alternative'>
          외 {참여인원 - 1}명
        </span>
      )}

      <div className='ml-auto flex items-center gap-[14px] text-label2'>
        <div className='flex items-center'>
          <span className='mr-1'>
            <Image src={IconHeart} alt='heart-icon' />
          </span>
          <span>2,132</span>
        </div>
        <div className='flex items-center'>
          <span className='mr-1'>
            <Image src={IconEye} alt='eye-icon' />
          </span>
          <span>2,132</span>
        </div>
      </div>
    </div>
  );
}
