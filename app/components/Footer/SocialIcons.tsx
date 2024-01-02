import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { socialIcons } from '@images/SocialIcons';

export default function SocialIcons() {
  return (
    <div className='flex gap-[3px]'>
      <Link
        href={'/'}
        className='flex h-[20px] w-[20px] items-center justify-center rounded-full bg-[#e8e8e8] p-[3px]'
      >
        <Image src={socialIcons.youtube} alt='youtube' />
      </Link>
      <Link
        href={'/'}
        className='flex h-[20px] w-[20px] items-center justify-center rounded-full bg-[#e8e8e8] p-[3px]'
      >
        <Image src={socialIcons.facebook} alt='facebook' />
      </Link>
      <Link
        href={'/'}
        className='flex h-[20px] w-[20px] items-center justify-center rounded-full bg-[#e8e8e8] p-[3px]'
      >
        <Image src={socialIcons.instagram} alt='instagram' />
      </Link>
    </div>
  );
}
