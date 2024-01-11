import { useState } from 'react';
import Image from 'next/image';

import StatusItem from './StatusItem';

import RightArrow from '@images/RightArrow.svg';

const applyStatusMenus = [
  '신청 프로젝트',
  '관심 프로젝트',
  '진행 프로젝트',
  '종료 프로젝트',
  '미선정 프로젝트',
];

export default function ProgressStatus() {
  const [status, setStatus] = useState(applyStatusMenus[0]);

  const handleStatusChange = (newStatus: string) => {
    setStatus(newStatus);
  };

  return (
    <div className='mt-4 flex flex-col gap-6'>
      <div className='flex w-full justify-center rounded-lg border border-line-normal bg-background-tertiary py-[22px]'>
        <ul className='flex gap-9'>
          {applyStatusMenus.map((menu, idx) => {
            return (
              <>
                {idx > 0 && idx < applyStatusMenus.length && (
                  <Image src={RightArrow} alt='RightArrow' />
                )}
                <StatusItem
                  key={menu}
                  text={menu}
                  count={1}
                  active={status === menu}
                  onClick={() => handleStatusChange(menu)}
                />
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
