import React from 'react';
import FolioHeader from './FolioHeader';
import LogoS from '@images/LogoS.svg';
import LogoFolio from '@images/LogoFolio.svg';
import LogoLog from '@images/LogoLog.svg';
import Image from 'next/image';

// TODO: 필요시 경로에 따른 css 설정 logic 추가
// h-[35.35px] rounded-t-lg border-x border-t border-line-normal bg-white
function Header() {
  return (
    <header className='w-full'>
      <div className='flex h-[49px] items-end border-b border-line-normal bg-background-primary'>
        <div className='h-[34.35px] px-[26.5px] py-2'>
          <Image src={LogoS} alt='logo' width={19} height={18.4} />
        </div>
        <div className='mb-[-1px] h-[35.35px] w-24 cursor-pointer rounded-t-lg border-x border-t border-line-normal bg-white px-4 py-2'>
          <Image src={LogoFolio} alt='logo' width={63.76} height={16.14} />
        </div>
        <div className='h-[34.35px] w-24 px-4  py-2'>
          <Image src={LogoLog} alt='logo' width={41.59} height={16.14} />
        </div>
      </div>
      <FolioHeader />
    </header>
  );
}

export default Header;
