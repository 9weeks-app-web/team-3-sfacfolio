import Image from 'next/image';

import ItemCheck from '@images/IconCheck.svg';

interface ProfileQuizTableItemProps {
  week: string;
  done: boolean;
}

export default function ProfileQuizTableItem({
  week,
  done,
}: ProfileQuizTableItemProps) {
  return (
    <div className='flex h-full w-[200px] flex-col items-center justify-center'>
      <div
        className={`mb-3 flex h-10 w-10 items-center justify-center rounded-full ${
          done ? 'bg-primary-heavy' : 'bg-text-disable'
        }`}
      >
        <Image src={ItemCheck} alt='check icon' />
      </div>
      <p className='mb-1 text-lg font-medium'>{week}</p>
      <button
        className={`h-[42px] w-[146px] rounded-lg font-bold ${
          done
            ? 'bg-text-disable text-text-assitive'
            : 'bg-primary-heavy text-white'
        }`}
        disabled={done}
      >
        {done ? '0000.00.00 완료' : '퀴즈 풀기'}
      </button>
    </div>
  );
}
