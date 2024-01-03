import { ParticipantsType } from '@/types/project';

import Image from 'next/image';

import IconShare from '@images/IconShare.svg';
import HeartIcon from '@/components/HeartIcon';

export interface ProjectApplicationProps {
  participants: ParticipantsType[];
  leftDay: string;
}

export default function FixedLayer({
  participants,
  leftDay,
}: ProjectApplicationProps) {
  const number = participants.length;

  return (
    <div className='fixed bottom-5 left-1/2 flex w-[1280px] translate-x-[-50%] translate-y-[-50%] items-center justify-between rounded-xl bg-primary-assitive px-12 py-6'>
      <div>
        <p className='text-[18px]'>{number}명이 지원했습니다.</p>
        <p className='text-label3 text-secondary-weak'>{leftDay}</p>
      </div>
      <div className='flex flex-row items-center gap-[10px]'>
        <button className='h-[50px] w-[250px] rounded-3xl bg-primary-heavy text-center text-[18px] font-bold text-white shadow-[1px_3px_6px_0px_rgba(0,0,0,0.25)]'>
          프로젝트 지원하기
        </button>
        <button
          className='flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white
        '
        >
          <HeartIcon size={20} color='#C4C4C4' />
        </button>
        <button
          className='flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white
        '
        >
          <Image src={IconShare} alt='share button' />
        </button>
      </div>
    </div>
  );
}
