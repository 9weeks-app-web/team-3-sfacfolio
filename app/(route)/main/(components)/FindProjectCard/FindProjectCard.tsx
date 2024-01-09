import React from 'react';
import FindProjectCardLabel from './FindProjectCardLabel';
import Image from 'next/image';
import Eye from '@images/Eye.svg';
import ArrowDownButton from '@images/ArrowDownButton.svg';

import CategoryButtonWrap from '../CategoryButtonWrap';
import HeartIcon from '@/components/Icons/HeartIcon';

const tags = [
  '개발자',
  '디자이너',
  '기획자',
  '부트캠프',
  '재택',
  '프로젝트',
  '더보기',
  '더보기기',
  '더보기기기',
];

export interface FindProjectCardProps {
  mode?: 'view' | 'apply';
}

function FindProjectCard({ mode = 'view' }: FindProjectCardProps) {
  return (
    <div className='flex w-[603px] cursor-pointer flex-col gap-[25px] rounded-lg bg-white p-6 shadow-[0px_0px_10px_0px_rgba(171,171,171,0.28)]'>
      <div className='flex w-full items-center justify-between'>
        <span className='text-lg text-text-alternative'>IT/개발</span>
        <div className='flex items-center gap-2'>
          <FindProjectCardLabel type='recruit' />
          <FindProjectCardLabel type='period' />
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        <div className='text-subTitle font-bold'>
          [중급/Java/약12개월/여의도/2명] 현대카드 채널시스템 운영 및 추가개발
        </div>
        <CategoryButtonWrap type='tag' tags={tags} />
      </div>
      <div className='flex items-center justify-between gap-1 border-t border-line-normal pt-[25px] text-caption1 text-[#747474]'>
        <div className='flex items-center gap-1'>
          <ul className='flex'>
            <li className='flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-white'>
              <Image
                src='https://images.unsplash.com/photo-1703535753934-7ab4ca4836c8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='profile'
                width={40}
                height={40}
              />
            </li>
            <li className='ml-[-18px] flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-white'>
              <Image
                src='https://images.unsplash.com/photo-1703535753934-7ab4ca4836c8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='profile'
                width={40}
                height={40}
              />
            </li>
          </ul>
          <span>모집현황</span>
          <span>0/3</span>
          <Image src={ArrowDownButton} alt='arrow' height={16} width={16} />
        </div>
        {mode === 'view' ? (
          <div className='flex  gap-[14px]'>
            <div className='flex items-center gap-1'>
              <HeartIcon size={20} color='#8E8E8E' />
              <span>1,522</span>
            </div>
            <div className='flex items-center gap-1'>
              <Image src={Eye} alt='view' height={20} width={20} />
              <span>1,598</span>
            </div>
          </div>
        ) : (
          <button className='w-[273px] rounded-lg bg-secondary-weak px-8 py-3 text-label1 font-bold text-white'>
            간편 지원하기
          </button>
        )}
      </div>
    </div>
  );
}

export default FindProjectCard;
