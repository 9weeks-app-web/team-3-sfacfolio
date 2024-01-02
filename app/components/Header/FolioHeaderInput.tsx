import Image from 'next/image';
import React from 'react';
import Search from '@images/Search.svg';

function FolioHeaderInput() {
  return (
    <div className='flex h-fit w-[341px] gap-4 rounded-lg border-line-normal bg-background-primary px-3 py-2'>
      <Image src={Search} alt='검색' width={24} height={24} />
      <input
        className='w-full bg-transparent outline-none placeholder:text-caption1 placeholder:text-text-alternative'
        placeholder='포트폴리오부터 채용까지 무엇이든 검색해 보세요!'
      />
    </div>
  );
}

export default FolioHeaderInput;
