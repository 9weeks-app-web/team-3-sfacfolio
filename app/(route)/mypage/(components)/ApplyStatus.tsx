import { useState } from 'react';
import ApplyStatusItem from './ApplyStatusItem';
import RightArrow from '@images/RightArrow.svg';
import Image from 'next/image';
import DropDownFilter from '@/components/DropDownFilter';
import ApplyStatusTable from './ApplyStatusTable';

const applyStatusMenus = ['지원 완료', '서류 통과', '최종 합격', '불합격'];

function ApplyStatus() {
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
                <ApplyStatusItem
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
      <div className='flex w-full items-center justify-between'>
        <div className='flex gap-6'>
          <DropDownFilter filterCategory='열람여부' filterOption='전체' />
          <DropDownFilter filterCategory='마감여부' filterOption='전체' />
          <DropDownFilter filterCategory='기간설정' filterOption='1개월' />
        </div>
        <button className='rounded-lg border border-primary-heavy px-[22.5px] py-4 font-bold leading-4 text-primary-heavy'>
          취업활동증명서 다운로드
        </button>
      </div>
      <ApplyStatusTable />
    </div>
  );
}

export default ApplyStatus;
