import React from 'react';
import FolioHeader from './FolioHeader';

// TODO: 필요시 경로에 따른 css 설정 logic 추가
function Header() {
  return (
    <header className='fixed top-0 z-[100] w-full'>
      <div className='flex h-10 items-end border-b border-line-normal bg-background-primary px-20 text-text-alternative'>
        <div className='flex h-[35px] w-[72px] items-center justify-center py-2'>
          스팩
        </div>
        <div className='mb-[-1px] flex h-9 w-24 cursor-pointer items-center justify-center rounded-t-lg border-x border-t border-line-normal bg-white py-2'>
          스팩폴리오
        </div>
        <div className='flex h-[35px] w-24 cursor-pointer items-center justify-center py-2'>
          스팩로그
        </div>
      </div>
      <FolioHeader />
    </header>
  );
}

export default Header;
