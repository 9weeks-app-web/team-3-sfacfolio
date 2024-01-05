import Link from 'next/link';
import React from 'react';
import IconAdd from '@images/IconAdd.svg';
import Image from 'next/image';

export default function UploadButton() {
  return (
    <Link href={'/'}>
      <button className='flex h-10 items-center rounded-lg border border-primary-heavy px-3 py-[9px] text-label1  text-primary-heavy'>
        <Image src={IconAdd} alt='add-icon' className='mr-2.5' />
        작업물 올리기
      </button>
    </Link>
  );
}
