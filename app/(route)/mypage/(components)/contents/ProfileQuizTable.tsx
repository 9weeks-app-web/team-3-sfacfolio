import Image from 'next/image';

import IconCalendar from '@images/IconCalendar.svg';
import ArrowLeftIcon from '@/components/ArrowLeftIcon';
import ArrowRightIcon from '@/components/ArrowRightIcon';
import ProfileQuizTableItem from './ProfileQuizTableItem';

export default function ProfileQuizTable() {
  return (
    <div className='mt-4 w-full rounded-xl border border-line-normal bg-background-tertiary'>
      <div className='flex w-full items-center justify-between border-b border-line-normal px-6 py-4'>
        <div className='flex items-center gap-2'>
          <ArrowLeftIcon width={14} height={14} fill='#C4C4C4' />
          <p className='text-lg font-bold'>2024년 1월</p>
          <ArrowRightIcon width={14} height={14} fill='#000000' />
        </div>
        <div className='cursor-pointer'>
          <Image src={IconCalendar} alt='calendar icon' />
        </div>
      </div>
      <div className='flex h-full justify-center px-4 py-6'>
        <ProfileQuizTableItem week='첫째 주' done={true} />
        <div className='mx-3 w-[1px] bg-line-normal'></div>
        <ProfileQuizTableItem week='둘째 주' done={true} />
        <div className='mx-3 w-[1px] bg-line-normal'></div>
        <ProfileQuizTableItem week='셋째 주' done={true} />
        <div className='mx-3 w-[1px] bg-line-normal'></div>
        <ProfileQuizTableItem week='넷째 주' done={false} />
      </div>
    </div>
  );
}
